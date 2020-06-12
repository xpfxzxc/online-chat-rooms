import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, Subscription, interval } from "rxjs";
import {
  filter,
  takeUntil,
  switchMap,
  startWith,
  finalize
} from "rxjs/operators";

import { MyCreatedRoom } from "../models/my-created-room.model";
import {
  HomeGQL,
  HomeQueryVariables,
  ChatGQL,
  ChatQueryVariables,
  ChatRoomMessageDocument,
  ChatRoomMessageAggregateDocument,
  EmitOnlineEventGQL,
  ChatRoomOnlineMemberDocument,
  ChatRoomOfflineMemberDocument,
  ChatRoomOnlineMemberAggregateDocument,
  ChatRoomOfflineMemberAggregateDocument
} from "../generated/graphql";
import { AuthService } from "../auth/auth.service";
import { MyEnteredRoom } from "../models/my-entered-room.model";
import { ChatRoomTitle } from "../models/chat-room-title.model";
import { ChatRoomSubtitle } from "../models/chat-room-subtitle.model";
import { ChatRoomDescription } from "../models/chat-room-description.model";
import { ChatRoomMemberList } from "../models/chat-room-member-list.model";
import { ChatRoomMessageList } from "../models/chat-room-message-list.model";
import { ProgressBarService } from "../progress-bar.service";

@Injectable()
export class HomeService {
  private myCreatedRoomsSource = new BehaviorSubject<MyCreatedRoom[]>(null);
  private myEnteredRoomsSource = new BehaviorSubject<MyEnteredRoom[]>(null);
  private chatRoomTitleSource = new BehaviorSubject<ChatRoomTitle>(null);
  private chatRoomSubtitleSource = new BehaviorSubject<ChatRoomSubtitle>(null);
  private chatRoomDescriptionSource = new BehaviorSubject<ChatRoomDescription>(
    null
  );
  private chatRoomMemberListSource = new BehaviorSubject<ChatRoomMemberList>(
    null
  );
  private chatRoomMessageListSource = new BehaviorSubject<ChatRoomMessageList>(
    null
  );
  private unsubscribeSubject = new Subject<void>();
  private chatGQLSubscription: Subscription;
  private userId: number;
  private roomIdSource = new BehaviorSubject<number>(null);

  myCreatedRooms$ = this.myCreatedRoomsSource.asObservable();
  myEnteredRooms$ = this.myEnteredRoomsSource.asObservable();
  chatRoomTitle$ = this.chatRoomTitleSource.asObservable();
  chatRoomSubtitle$ = this.chatRoomSubtitleSource.asObservable();
  chatRoomDescription$ = this.chatRoomDescriptionSource.asObservable();
  chatRoomMemberList$ = this.chatRoomMemberListSource.asObservable();
  chatRoomMessageList$ = this.chatRoomMessageListSource.asObservable();
  roomId$ = this.roomIdSource.asObservable();
  homeQueryVariables: HomeQueryVariables;
  chatQueryVariables: ChatQueryVariables;

  constructor(
    private homeGQL: HomeGQL,
    private authService: AuthService,
    private chatGQL: ChatGQL,
    private emitOnlineEventGQL: EmitOnlineEventGQL,
    private progressBarService: ProgressBarService
  ) {
    this.authService.authenticatedUserInfo$
      .pipe(
        filter(userInfo => userInfo !== null),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(({ id }) => {
        this.userId = id;
        this.init();
      });

    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() =>
          this.emitOnlineEventGQL.mutate({
            user_id: authService.getUserId()
          })
        ),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  public switchRoom(roomId: number) {
    if (this.roomIdSource.getValue() === roomId) {
      return;
    }

    if (this.roomIdSource.getValue()) {
      this.chatGQLSubscription.unsubscribe();
    }

    this.chatQueryVariables = { room_id: roomId };

    this.progressBarService.indeterminate();
    this.roomIdSource.next(roomId);

    const query = this.chatGQL.watch(this.chatQueryVariables, {
      fetchPolicy: "network-only"
    });

    query.subscribeToMore({
      document: ChatRoomMessageDocument,
      variables: {
        room_id: roomId
      },
      updateQuery: (previous, { subscriptionData }) => {
        if (!previous) {
          return previous;
        }

        const newChatRoomMessage = [
          ...previous.chat_room_message,
          ...subscriptionData.data.chat_room_message
        ];

        return {
          ...previous,
          chat_room_message: newChatRoomMessage
        };
      }
    });

    query.subscribeToMore({
      document: ChatRoomMessageAggregateDocument,
      variables: {
        room_id: roomId
      },
      updateQuery: (previous, { subscriptionData }) => {
        if (!previous) {
          return previous;
        }

        return {
          ...previous,
          chat_room_message_aggregate:
            subscriptionData.data.chat_room_message_aggregate
        };
      }
    });

    query.subscribeToMore({
      document: ChatRoomOnlineMemberDocument,
      variables: {
        room_id: roomId
      },
      updateQuery: (previous, { subscriptionData }) => {
        if (!previous || !subscriptionData.data.chat_room_member_online[0]) {
          return;
        }

        previous.chat_room_member_offline = previous.chat_room_member_offline.filter(
          m =>
            m.member_id !==
            subscriptionData.data.chat_room_member_online[0].member_id
        );
        previous.chat_room_member_online = previous.chat_room_member_online.filter(
          m =>
            m.member_id !==
            subscriptionData.data.chat_room_member_online[0].member_id
        );
        previous.chat_room_member_online = [
          subscriptionData.data.chat_room_member_online[0],
          ...previous.chat_room_member_online
        ];

        return previous;
      }
    });

    query.subscribeToMore({
      document: ChatRoomOfflineMemberDocument,
      variables: {
        room_id: roomId
      },
      updateQuery: (previous, { subscriptionData }) => {
        if (!previous || !subscriptionData.data.chat_room_member_offline[0]) {
          return;
        }

        previous.chat_room_member_offline = previous.chat_room_member_offline.filter(
          m =>
            m.member_id !==
            subscriptionData.data.chat_room_member_offline[0].member_id
        );
        previous.chat_room_member_online = previous.chat_room_member_online.filter(
          m =>
            m.member_id !==
            subscriptionData.data.chat_room_member_offline[0].member_id
        );
        previous.chat_room_member_offline = [
          subscriptionData.data.chat_room_member_offline[0],
          ...previous.chat_room_member_offline
        ];

        return previous;
      }
    });

    query.subscribeToMore({
      document: ChatRoomOnlineMemberAggregateDocument,
      variables: {
        room_id: roomId
      },
      updateQuery: (previous, { subscriptionData }) => {
        if (!previous) {
          return previous;
        }

        return {
          ...previous,
          chat_room_member_online_aggregate:
            subscriptionData.data.chat_room_member_online_aggregate
        };
      }
    });

    query.subscribeToMore({
      document: ChatRoomOfflineMemberAggregateDocument,
      variables: {
        room_id: roomId
      },
      updateQuery: (previous, { subscriptionData }) => {
        if (!previous) {
          return previous;
        }

        return {
          ...previous,
          chat_room_member_offline_aggregate:
            subscriptionData.data.chat_room_member_offline_aggregate
        };
      }
    });

    this.chatGQLSubscription = query.valueChanges
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(
        ({ data }) => {
          const userRoom = data.user_room[0];

          this.progressBarService.complete();

          this.chatRoomTitleSource.next({
            id: userRoom.room.id,
            name: userRoom.room.name
          });

          this.chatRoomSubtitleSource.next({
            host: {
              id: userRoom.room.host.id,
              name: userRoom.room.host.name
            },
            totalMessages: data.chat_room_message_aggregate.aggregate.count,
            totalOnlineMembers:
              data.chat_room_member_online_aggregate.aggregate.count,
            totalOfflineMembers:
              data.chat_room_member_offline_aggregate.aggregate.count
          });

          this.chatRoomDescriptionSource.next({
            introduction: userRoom.room.introduction,
            createdAt: userRoom.room.created_at
          });

          const formalizeMemberList = list =>
            list.map(m => ({
              id: m.member_id,
              name: m.member_name,
              lastSeen: m.member_last_seen
            }));
          this.chatRoomMemberListSource.next({
            online: formalizeMemberList(data.chat_room_member_online),
            offline: formalizeMemberList(data.chat_room_member_offline)
          });

          this.chatRoomMessageListSource.next({
            list: data.chat_room_message.map(m => ({
              id: m.id,
              sender: m.sender,
              content: m.message,
              sentAt: m.created_at
            }))
          });
        },
        () => {
          this.progressBarService.complete();
        }
      );
  }

  private init() {
    const { userId } = this;
    this.homeQueryVariables = {
      user_id: userId
    };

    this.homeGQL
      .watch(this.homeQueryVariables, { fetchPolicy: "network-only" })
      .valueChanges.pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(({ data, errors }) => {
        if (data) {
          this.myCreatedRoomsSource.next(data.myCreatedRooms);
          this.myEnteredRoomsSource.next(data.myEnteredRooms);
        }
      });
  }
}
