import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Subject } from "rxjs";

import { SendChatMessageGQL } from "src/app/generated/graphql";
import { HomeService } from "../../home.service";
import { finalize, takeUntil, repeat } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "ocr-chat-room-form",
  templateUrl: "./chat-room-form.component.html",
  styleUrls: ["./chat-room-form.component.scss"]
})
export class ChatRoomFormComponent implements OnInit {
  chatMessageForm = this.fb.group({
    message: [
      "",
      [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]
    ]
  });
  chatCount = 0;
  loading = false;

  private unsubscribeSubject = new Subject<void>();
  private roomId;

  constructor(
    private sendChatMessageGQL: SendChatMessageGQL,
    private fb: FormBuilder,
    private homeService: HomeService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.homeService.roomId$.subscribe(roomId => {
      this.roomId = roomId;

      this.chatMessageForm.reset();
    });
  }

  submit() {
    if (this.chatMessageForm.invalid || !this.roomId) {
      return;
    }

    this.loading = true;

    this.sendChatMessageGQL
      .mutate({
        room_id: this.roomId,
        message: this.chatMessageForm.get("message").value
      })
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(({ data, errors }) => {
        if (data) {
          this.chatMessageForm.reset();
        }
        if (errors) {
          this.toastr.error("未知错误，发送消息失败");
        }
      });
  }
}
