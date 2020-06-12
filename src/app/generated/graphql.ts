import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { MutationOptionsAlone, QueryOptionsAlone, SubscriptionOptionsAlone, WatchQueryOptionsAlone } from 'apollo-angular/types';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  timestamptz: any,
};



export type Change_Password_Input = {
  new_password: Scalars['String'],
};

export type Change_Password_Response = {
   __typename?: 'change_password_response',
  success: Scalars['Boolean'],
};

export type Chat_Message = {
   __typename?: 'chat_message',
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  message: Scalars['String'],
  room_id: Scalars['Int'],
  sender_id: Scalars['Int'],
};

export type Chat_Message_Aggregate = {
   __typename?: 'chat_message_aggregate',
  aggregate?: Maybe<Chat_Message_Aggregate_Fields>,
  nodes: Array<Chat_Message>,
};

export type Chat_Message_Aggregate_Fields = {
   __typename?: 'chat_message_aggregate_fields',
  avg?: Maybe<Chat_Message_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Chat_Message_Max_Fields>,
  min?: Maybe<Chat_Message_Min_Fields>,
  stddev?: Maybe<Chat_Message_Stddev_Fields>,
  stddev_pop?: Maybe<Chat_Message_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Chat_Message_Stddev_Samp_Fields>,
  sum?: Maybe<Chat_Message_Sum_Fields>,
  var_pop?: Maybe<Chat_Message_Var_Pop_Fields>,
  var_samp?: Maybe<Chat_Message_Var_Samp_Fields>,
  variance?: Maybe<Chat_Message_Variance_Fields>,
};


export type Chat_Message_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Message_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Chat_Message_Aggregate_Order_By = {
  avg?: Maybe<Chat_Message_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Chat_Message_Max_Order_By>,
  min?: Maybe<Chat_Message_Min_Order_By>,
  stddev?: Maybe<Chat_Message_Stddev_Order_By>,
  stddev_pop?: Maybe<Chat_Message_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Chat_Message_Stddev_Samp_Order_By>,
  sum?: Maybe<Chat_Message_Sum_Order_By>,
  var_pop?: Maybe<Chat_Message_Var_Pop_Order_By>,
  var_samp?: Maybe<Chat_Message_Var_Samp_Order_By>,
  variance?: Maybe<Chat_Message_Variance_Order_By>,
};

export type Chat_Message_Arr_Rel_Insert_Input = {
  data: Array<Chat_Message_Insert_Input>,
  on_conflict?: Maybe<Chat_Message_On_Conflict>,
};

export type Chat_Message_Avg_Fields = {
   __typename?: 'chat_message_avg_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
};

export type Chat_Message_Avg_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
};

export type Chat_Message_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chat_Message_Bool_Exp>>>,
  _not?: Maybe<Chat_Message_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Chat_Message_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  message?: Maybe<String_Comparison_Exp>,
  room_id?: Maybe<Int_Comparison_Exp>,
  sender_id?: Maybe<Int_Comparison_Exp>,
};

export enum Chat_Message_Constraint {
  ChatMessagePkey = 'chat_message_pkey'
}

export type Chat_Message_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
  room_id?: Maybe<Scalars['Int']>,
  sender_id?: Maybe<Scalars['Int']>,
};

export type Chat_Message_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  message?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  sender_id?: Maybe<Scalars['Int']>,
};

export type Chat_Message_Max_Fields = {
   __typename?: 'chat_message_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  message?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  sender_id?: Maybe<Scalars['Int']>,
};

export type Chat_Message_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  message?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
};

export type Chat_Message_Min_Fields = {
   __typename?: 'chat_message_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  message?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  sender_id?: Maybe<Scalars['Int']>,
};

export type Chat_Message_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  message?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
};

export type Chat_Message_Mutation_Response = {
   __typename?: 'chat_message_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Chat_Message>,
};

export type Chat_Message_Obj_Rel_Insert_Input = {
  data: Chat_Message_Insert_Input,
  on_conflict?: Maybe<Chat_Message_On_Conflict>,
};

export type Chat_Message_On_Conflict = {
  constraint: Chat_Message_Constraint,
  update_columns: Array<Chat_Message_Update_Column>,
  where?: Maybe<Chat_Message_Bool_Exp>,
};

export type Chat_Message_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  message?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
};

export enum Chat_Message_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Message = 'message',
  RoomId = 'room_id',
  SenderId = 'sender_id'
}

export type Chat_Message_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  message?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  sender_id?: Maybe<Scalars['Int']>,
};

export type Chat_Message_Stddev_Fields = {
   __typename?: 'chat_message_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
};

export type Chat_Message_Stddev_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
};

export type Chat_Message_Stddev_Pop_Fields = {
   __typename?: 'chat_message_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
};

export type Chat_Message_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
};

export type Chat_Message_Stddev_Samp_Fields = {
   __typename?: 'chat_message_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
};

export type Chat_Message_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
};

export type Chat_Message_Sum_Fields = {
   __typename?: 'chat_message_sum_fields',
  id?: Maybe<Scalars['Int']>,
  room_id?: Maybe<Scalars['Int']>,
  sender_id?: Maybe<Scalars['Int']>,
};

export type Chat_Message_Sum_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
};

export enum Chat_Message_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Message = 'message',
  RoomId = 'room_id',
  SenderId = 'sender_id'
}

export type Chat_Message_Var_Pop_Fields = {
   __typename?: 'chat_message_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
};

export type Chat_Message_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
};

export type Chat_Message_Var_Samp_Fields = {
   __typename?: 'chat_message_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
};

export type Chat_Message_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
};

export type Chat_Message_Variance_Fields = {
   __typename?: 'chat_message_variance_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
};

export type Chat_Message_Variance_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Offline = {
   __typename?: 'chat_room_member_offline',
  member_id?: Maybe<Scalars['Int']>,
  member_last_seen?: Maybe<Scalars['timestamptz']>,
  member_name?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Member_Offline_Aggregate = {
   __typename?: 'chat_room_member_offline_aggregate',
  aggregate?: Maybe<Chat_Room_Member_Offline_Aggregate_Fields>,
  nodes: Array<Chat_Room_Member_Offline>,
};

export type Chat_Room_Member_Offline_Aggregate_Fields = {
   __typename?: 'chat_room_member_offline_aggregate_fields',
  avg?: Maybe<Chat_Room_Member_Offline_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Chat_Room_Member_Offline_Max_Fields>,
  min?: Maybe<Chat_Room_Member_Offline_Min_Fields>,
  stddev?: Maybe<Chat_Room_Member_Offline_Stddev_Fields>,
  stddev_pop?: Maybe<Chat_Room_Member_Offline_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Chat_Room_Member_Offline_Stddev_Samp_Fields>,
  sum?: Maybe<Chat_Room_Member_Offline_Sum_Fields>,
  var_pop?: Maybe<Chat_Room_Member_Offline_Var_Pop_Fields>,
  var_samp?: Maybe<Chat_Room_Member_Offline_Var_Samp_Fields>,
  variance?: Maybe<Chat_Room_Member_Offline_Variance_Fields>,
};


export type Chat_Room_Member_Offline_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Room_Member_Offline_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Chat_Room_Member_Offline_Aggregate_Order_By = {
  avg?: Maybe<Chat_Room_Member_Offline_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Chat_Room_Member_Offline_Max_Order_By>,
  min?: Maybe<Chat_Room_Member_Offline_Min_Order_By>,
  stddev?: Maybe<Chat_Room_Member_Offline_Stddev_Order_By>,
  stddev_pop?: Maybe<Chat_Room_Member_Offline_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Chat_Room_Member_Offline_Stddev_Samp_Order_By>,
  sum?: Maybe<Chat_Room_Member_Offline_Sum_Order_By>,
  var_pop?: Maybe<Chat_Room_Member_Offline_Var_Pop_Order_By>,
  var_samp?: Maybe<Chat_Room_Member_Offline_Var_Samp_Order_By>,
  variance?: Maybe<Chat_Room_Member_Offline_Variance_Order_By>,
};

export type Chat_Room_Member_Offline_Avg_Fields = {
   __typename?: 'chat_room_member_offline_avg_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Offline_Avg_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Offline_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chat_Room_Member_Offline_Bool_Exp>>>,
  _not?: Maybe<Chat_Room_Member_Offline_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Chat_Room_Member_Offline_Bool_Exp>>>,
  member_id?: Maybe<Int_Comparison_Exp>,
  member_last_seen?: Maybe<Timestamptz_Comparison_Exp>,
  member_name?: Maybe<String_Comparison_Exp>,
  room_id?: Maybe<Int_Comparison_Exp>,
  user_id?: Maybe<Int_Comparison_Exp>,
};

export type Chat_Room_Member_Offline_Max_Fields = {
   __typename?: 'chat_room_member_offline_max_fields',
  member_id?: Maybe<Scalars['Int']>,
  member_last_seen?: Maybe<Scalars['timestamptz']>,
  member_name?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Member_Offline_Max_Order_By = {
  member_id?: Maybe<Order_By>,
  member_last_seen?: Maybe<Order_By>,
  member_name?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Offline_Min_Fields = {
   __typename?: 'chat_room_member_offline_min_fields',
  member_id?: Maybe<Scalars['Int']>,
  member_last_seen?: Maybe<Scalars['timestamptz']>,
  member_name?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Member_Offline_Min_Order_By = {
  member_id?: Maybe<Order_By>,
  member_last_seen?: Maybe<Order_By>,
  member_name?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Offline_Order_By = {
  member_id?: Maybe<Order_By>,
  member_last_seen?: Maybe<Order_By>,
  member_name?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export enum Chat_Room_Member_Offline_Select_Column {
  MemberId = 'member_id',
  MemberLastSeen = 'member_last_seen',
  MemberName = 'member_name',
  RoomId = 'room_id',
  UserId = 'user_id'
}

export type Chat_Room_Member_Offline_Stddev_Fields = {
   __typename?: 'chat_room_member_offline_stddev_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Offline_Stddev_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Offline_Stddev_Pop_Fields = {
   __typename?: 'chat_room_member_offline_stddev_pop_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Offline_Stddev_Pop_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Offline_Stddev_Samp_Fields = {
   __typename?: 'chat_room_member_offline_stddev_samp_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Offline_Stddev_Samp_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Offline_Sum_Fields = {
   __typename?: 'chat_room_member_offline_sum_fields',
  member_id?: Maybe<Scalars['Int']>,
  room_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Member_Offline_Sum_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Offline_Var_Pop_Fields = {
   __typename?: 'chat_room_member_offline_var_pop_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Offline_Var_Pop_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Offline_Var_Samp_Fields = {
   __typename?: 'chat_room_member_offline_var_samp_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Offline_Var_Samp_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Offline_Variance_Fields = {
   __typename?: 'chat_room_member_offline_variance_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Offline_Variance_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Online = {
   __typename?: 'chat_room_member_online',
  member_id?: Maybe<Scalars['Int']>,
  member_last_seen?: Maybe<Scalars['timestamptz']>,
  member_name?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Member_Online_Aggregate = {
   __typename?: 'chat_room_member_online_aggregate',
  aggregate?: Maybe<Chat_Room_Member_Online_Aggregate_Fields>,
  nodes: Array<Chat_Room_Member_Online>,
};

export type Chat_Room_Member_Online_Aggregate_Fields = {
   __typename?: 'chat_room_member_online_aggregate_fields',
  avg?: Maybe<Chat_Room_Member_Online_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Chat_Room_Member_Online_Max_Fields>,
  min?: Maybe<Chat_Room_Member_Online_Min_Fields>,
  stddev?: Maybe<Chat_Room_Member_Online_Stddev_Fields>,
  stddev_pop?: Maybe<Chat_Room_Member_Online_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Chat_Room_Member_Online_Stddev_Samp_Fields>,
  sum?: Maybe<Chat_Room_Member_Online_Sum_Fields>,
  var_pop?: Maybe<Chat_Room_Member_Online_Var_Pop_Fields>,
  var_samp?: Maybe<Chat_Room_Member_Online_Var_Samp_Fields>,
  variance?: Maybe<Chat_Room_Member_Online_Variance_Fields>,
};


export type Chat_Room_Member_Online_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Room_Member_Online_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Chat_Room_Member_Online_Aggregate_Order_By = {
  avg?: Maybe<Chat_Room_Member_Online_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Chat_Room_Member_Online_Max_Order_By>,
  min?: Maybe<Chat_Room_Member_Online_Min_Order_By>,
  stddev?: Maybe<Chat_Room_Member_Online_Stddev_Order_By>,
  stddev_pop?: Maybe<Chat_Room_Member_Online_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Chat_Room_Member_Online_Stddev_Samp_Order_By>,
  sum?: Maybe<Chat_Room_Member_Online_Sum_Order_By>,
  var_pop?: Maybe<Chat_Room_Member_Online_Var_Pop_Order_By>,
  var_samp?: Maybe<Chat_Room_Member_Online_Var_Samp_Order_By>,
  variance?: Maybe<Chat_Room_Member_Online_Variance_Order_By>,
};

export type Chat_Room_Member_Online_Avg_Fields = {
   __typename?: 'chat_room_member_online_avg_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Online_Avg_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Online_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chat_Room_Member_Online_Bool_Exp>>>,
  _not?: Maybe<Chat_Room_Member_Online_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Chat_Room_Member_Online_Bool_Exp>>>,
  member_id?: Maybe<Int_Comparison_Exp>,
  member_last_seen?: Maybe<Timestamptz_Comparison_Exp>,
  member_name?: Maybe<String_Comparison_Exp>,
  room_id?: Maybe<Int_Comparison_Exp>,
  user_id?: Maybe<Int_Comparison_Exp>,
};

export type Chat_Room_Member_Online_Max_Fields = {
   __typename?: 'chat_room_member_online_max_fields',
  member_id?: Maybe<Scalars['Int']>,
  member_last_seen?: Maybe<Scalars['timestamptz']>,
  member_name?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Member_Online_Max_Order_By = {
  member_id?: Maybe<Order_By>,
  member_last_seen?: Maybe<Order_By>,
  member_name?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Online_Min_Fields = {
   __typename?: 'chat_room_member_online_min_fields',
  member_id?: Maybe<Scalars['Int']>,
  member_last_seen?: Maybe<Scalars['timestamptz']>,
  member_name?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Member_Online_Min_Order_By = {
  member_id?: Maybe<Order_By>,
  member_last_seen?: Maybe<Order_By>,
  member_name?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Online_Order_By = {
  member_id?: Maybe<Order_By>,
  member_last_seen?: Maybe<Order_By>,
  member_name?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export enum Chat_Room_Member_Online_Select_Column {
  MemberId = 'member_id',
  MemberLastSeen = 'member_last_seen',
  MemberName = 'member_name',
  RoomId = 'room_id',
  UserId = 'user_id'
}

export type Chat_Room_Member_Online_Stddev_Fields = {
   __typename?: 'chat_room_member_online_stddev_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Online_Stddev_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Online_Stddev_Pop_Fields = {
   __typename?: 'chat_room_member_online_stddev_pop_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Online_Stddev_Pop_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Online_Stddev_Samp_Fields = {
   __typename?: 'chat_room_member_online_stddev_samp_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Online_Stddev_Samp_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Online_Sum_Fields = {
   __typename?: 'chat_room_member_online_sum_fields',
  member_id?: Maybe<Scalars['Int']>,
  room_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Member_Online_Sum_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Online_Var_Pop_Fields = {
   __typename?: 'chat_room_member_online_var_pop_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Online_Var_Pop_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Online_Var_Samp_Fields = {
   __typename?: 'chat_room_member_online_var_samp_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Online_Var_Samp_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Member_Online_Variance_Fields = {
   __typename?: 'chat_room_member_online_variance_fields',
  member_id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Member_Online_Variance_Order_By = {
  member_id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Message = {
   __typename?: 'chat_room_message',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  message?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  sender?: Maybe<User>,
  sender_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Message_Aggregate = {
   __typename?: 'chat_room_message_aggregate',
  aggregate?: Maybe<Chat_Room_Message_Aggregate_Fields>,
  nodes: Array<Chat_Room_Message>,
};

export type Chat_Room_Message_Aggregate_Fields = {
   __typename?: 'chat_room_message_aggregate_fields',
  avg?: Maybe<Chat_Room_Message_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Chat_Room_Message_Max_Fields>,
  min?: Maybe<Chat_Room_Message_Min_Fields>,
  stddev?: Maybe<Chat_Room_Message_Stddev_Fields>,
  stddev_pop?: Maybe<Chat_Room_Message_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Chat_Room_Message_Stddev_Samp_Fields>,
  sum?: Maybe<Chat_Room_Message_Sum_Fields>,
  var_pop?: Maybe<Chat_Room_Message_Var_Pop_Fields>,
  var_samp?: Maybe<Chat_Room_Message_Var_Samp_Fields>,
  variance?: Maybe<Chat_Room_Message_Variance_Fields>,
};


export type Chat_Room_Message_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Room_Message_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Chat_Room_Message_Aggregate_Order_By = {
  avg?: Maybe<Chat_Room_Message_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Chat_Room_Message_Max_Order_By>,
  min?: Maybe<Chat_Room_Message_Min_Order_By>,
  stddev?: Maybe<Chat_Room_Message_Stddev_Order_By>,
  stddev_pop?: Maybe<Chat_Room_Message_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Chat_Room_Message_Stddev_Samp_Order_By>,
  sum?: Maybe<Chat_Room_Message_Sum_Order_By>,
  var_pop?: Maybe<Chat_Room_Message_Var_Pop_Order_By>,
  var_samp?: Maybe<Chat_Room_Message_Var_Samp_Order_By>,
  variance?: Maybe<Chat_Room_Message_Variance_Order_By>,
};

export type Chat_Room_Message_Avg_Fields = {
   __typename?: 'chat_room_message_avg_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Message_Avg_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Message_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chat_Room_Message_Bool_Exp>>>,
  _not?: Maybe<Chat_Room_Message_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Chat_Room_Message_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  message?: Maybe<String_Comparison_Exp>,
  room_id?: Maybe<Int_Comparison_Exp>,
  sender?: Maybe<User_Bool_Exp>,
  sender_id?: Maybe<Int_Comparison_Exp>,
  user_id?: Maybe<Int_Comparison_Exp>,
};

export type Chat_Room_Message_Max_Fields = {
   __typename?: 'chat_room_message_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  message?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  sender_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Message_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  message?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Message_Min_Fields = {
   __typename?: 'chat_room_message_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  message?: Maybe<Scalars['String']>,
  room_id?: Maybe<Scalars['Int']>,
  sender_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Message_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  message?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Message_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  message?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender?: Maybe<User_Order_By>,
  sender_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export enum Chat_Room_Message_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Message = 'message',
  RoomId = 'room_id',
  SenderId = 'sender_id',
  UserId = 'user_id'
}

export type Chat_Room_Message_Stddev_Fields = {
   __typename?: 'chat_room_message_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Message_Stddev_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Message_Stddev_Pop_Fields = {
   __typename?: 'chat_room_message_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Message_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Message_Stddev_Samp_Fields = {
   __typename?: 'chat_room_message_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Message_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Message_Sum_Fields = {
   __typename?: 'chat_room_message_sum_fields',
  id?: Maybe<Scalars['Int']>,
  room_id?: Maybe<Scalars['Int']>,
  sender_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Chat_Room_Message_Sum_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Message_Var_Pop_Fields = {
   __typename?: 'chat_room_message_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Message_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Message_Var_Samp_Fields = {
   __typename?: 'chat_room_message_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Message_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Chat_Room_Message_Variance_Fields = {
   __typename?: 'chat_room_message_variance_fields',
  id?: Maybe<Scalars['Float']>,
  room_id?: Maybe<Scalars['Float']>,
  sender_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Chat_Room_Message_Variance_Order_By = {
  id?: Maybe<Order_By>,
  room_id?: Maybe<Order_By>,
  sender_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

export type Logged_User = {
   __typename?: 'logged_user',
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  name: Scalars['String'],
};

export type Login_Input = {
  name: Scalars['String'],
  password: Scalars['String'],
};

export type Login_Response = {
   __typename?: 'login_response',
  token: Scalars['String'],
  user: Logged_User,
};

export type Mutation = {
   __typename?: 'Mutation',
  change_password: Change_Password_Response,
  delete_chat_message?: Maybe<Chat_Message_Mutation_Response>,
  delete_room?: Maybe<Room_Mutation_Response>,
  delete_user?: Maybe<User_Mutation_Response>,
  delete_user_room?: Maybe<User_Room_Mutation_Response>,
  insert_chat_message?: Maybe<Chat_Message_Mutation_Response>,
  insert_room?: Maybe<Room_Mutation_Response>,
  insert_user?: Maybe<User_Mutation_Response>,
  insert_user_room?: Maybe<User_Room_Mutation_Response>,
  login: Login_Response,
  sign_up: Sign_Up_Response,
  update_chat_message?: Maybe<Chat_Message_Mutation_Response>,
  update_room?: Maybe<Room_Mutation_Response>,
  update_user?: Maybe<User_Mutation_Response>,
  update_user_room?: Maybe<User_Room_Mutation_Response>,
};


export type MutationChange_PasswordArgs = {
  input: Change_Password_Input
};


export type MutationDelete_Chat_MessageArgs = {
  where: Chat_Message_Bool_Exp
};


export type MutationDelete_RoomArgs = {
  where: Room_Bool_Exp
};


export type MutationDelete_UserArgs = {
  where: User_Bool_Exp
};


export type MutationDelete_User_RoomArgs = {
  where: User_Room_Bool_Exp
};


export type MutationInsert_Chat_MessageArgs = {
  objects: Array<Chat_Message_Insert_Input>,
  on_conflict?: Maybe<Chat_Message_On_Conflict>
};


export type MutationInsert_RoomArgs = {
  objects: Array<Room_Insert_Input>,
  on_conflict?: Maybe<Room_On_Conflict>
};


export type MutationInsert_UserArgs = {
  objects: Array<User_Insert_Input>,
  on_conflict?: Maybe<User_On_Conflict>
};


export type MutationInsert_User_RoomArgs = {
  objects: Array<User_Room_Insert_Input>,
  on_conflict?: Maybe<User_Room_On_Conflict>
};


export type MutationLoginArgs = {
  input: Login_Input
};


export type MutationSign_UpArgs = {
  input: Sign_Up_Input
};


export type MutationUpdate_Chat_MessageArgs = {
  _inc?: Maybe<Chat_Message_Inc_Input>,
  _set?: Maybe<Chat_Message_Set_Input>,
  where: Chat_Message_Bool_Exp
};


export type MutationUpdate_RoomArgs = {
  _inc?: Maybe<Room_Inc_Input>,
  _set?: Maybe<Room_Set_Input>,
  where: Room_Bool_Exp
};


export type MutationUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>,
  _set?: Maybe<User_Set_Input>,
  where: User_Bool_Exp
};


export type MutationUpdate_User_RoomArgs = {
  _inc?: Maybe<User_Room_Inc_Input>,
  _set?: Maybe<User_Room_Set_Input>,
  where: User_Room_Bool_Exp
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query = {
   __typename?: 'Query',
  chat_message: Array<Chat_Message>,
  chat_message_aggregate: Chat_Message_Aggregate,
  chat_message_by_pk?: Maybe<Chat_Message>,
  chat_room_member_offline: Array<Chat_Room_Member_Offline>,
  chat_room_member_offline_aggregate: Chat_Room_Member_Offline_Aggregate,
  chat_room_member_online: Array<Chat_Room_Member_Online>,
  chat_room_member_online_aggregate: Chat_Room_Member_Online_Aggregate,
  chat_room_message: Array<Chat_Room_Message>,
  chat_room_message_aggregate: Chat_Room_Message_Aggregate,
  logged_user: Logged_User,
  room: Array<Room>,
  room_aggregate: Room_Aggregate,
  room_by_pk?: Maybe<Room>,
  user: Array<User>,
  user_aggregate: User_Aggregate,
  user_by_pk?: Maybe<User>,
  user_room: Array<User_Room>,
  user_room_aggregate: User_Room_Aggregate,
  user_room_by_pk?: Maybe<User_Room>,
};


export type QueryChat_MessageArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Message_Order_By>>,
  where?: Maybe<Chat_Message_Bool_Exp>
};


export type QueryChat_Message_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Message_Order_By>>,
  where?: Maybe<Chat_Message_Bool_Exp>
};


export type QueryChat_Message_By_PkArgs = {
  id: Scalars['Int']
};


export type QueryChat_Room_Member_OfflineArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Member_Offline_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Member_Offline_Order_By>>,
  where?: Maybe<Chat_Room_Member_Offline_Bool_Exp>
};


export type QueryChat_Room_Member_Offline_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Member_Offline_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Member_Offline_Order_By>>,
  where?: Maybe<Chat_Room_Member_Offline_Bool_Exp>
};


export type QueryChat_Room_Member_OnlineArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Member_Online_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Member_Online_Order_By>>,
  where?: Maybe<Chat_Room_Member_Online_Bool_Exp>
};


export type QueryChat_Room_Member_Online_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Member_Online_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Member_Online_Order_By>>,
  where?: Maybe<Chat_Room_Member_Online_Bool_Exp>
};


export type QueryChat_Room_MessageArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Message_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Message_Order_By>>,
  where?: Maybe<Chat_Room_Message_Bool_Exp>
};


export type QueryChat_Room_Message_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Message_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Message_Order_By>>,
  where?: Maybe<Chat_Room_Message_Bool_Exp>
};


export type QueryRoomArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Room_Order_By>>,
  where?: Maybe<Room_Bool_Exp>
};


export type QueryRoom_AggregateArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Room_Order_By>>,
  where?: Maybe<Room_Bool_Exp>
};


export type QueryRoom_By_PkArgs = {
  id: Scalars['Int']
};


export type QueryUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type QueryUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type QueryUser_By_PkArgs = {
  id: Scalars['Int']
};


export type QueryUser_RoomArgs = {
  distinct_on?: Maybe<Array<User_Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Room_Order_By>>,
  where?: Maybe<User_Room_Bool_Exp>
};


export type QueryUser_Room_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Room_Order_By>>,
  where?: Maybe<User_Room_Bool_Exp>
};


export type QueryUser_Room_By_PkArgs = {
  room_id: Scalars['Int'],
  user_id: Scalars['Int']
};

export type Room = {
   __typename?: 'room',
  created_at: Scalars['timestamptz'],
  host: User,
  host_id: Scalars['Int'],
  id: Scalars['Int'],
  introduction: Scalars['String'],
  members: Array<User_Room>,
  members_aggregate: User_Room_Aggregate,
  name: Scalars['String'],
};


export type RoomMembersArgs = {
  distinct_on?: Maybe<Array<User_Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Room_Order_By>>,
  where?: Maybe<User_Room_Bool_Exp>
};


export type RoomMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Room_Order_By>>,
  where?: Maybe<User_Room_Bool_Exp>
};

export type Room_Aggregate = {
   __typename?: 'room_aggregate',
  aggregate?: Maybe<Room_Aggregate_Fields>,
  nodes: Array<Room>,
};

export type Room_Aggregate_Fields = {
   __typename?: 'room_aggregate_fields',
  avg?: Maybe<Room_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Room_Max_Fields>,
  min?: Maybe<Room_Min_Fields>,
  stddev?: Maybe<Room_Stddev_Fields>,
  stddev_pop?: Maybe<Room_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Room_Stddev_Samp_Fields>,
  sum?: Maybe<Room_Sum_Fields>,
  var_pop?: Maybe<Room_Var_Pop_Fields>,
  var_samp?: Maybe<Room_Var_Samp_Fields>,
  variance?: Maybe<Room_Variance_Fields>,
};


export type Room_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Room_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Room_Aggregate_Order_By = {
  avg?: Maybe<Room_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Room_Max_Order_By>,
  min?: Maybe<Room_Min_Order_By>,
  stddev?: Maybe<Room_Stddev_Order_By>,
  stddev_pop?: Maybe<Room_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Room_Stddev_Samp_Order_By>,
  sum?: Maybe<Room_Sum_Order_By>,
  var_pop?: Maybe<Room_Var_Pop_Order_By>,
  var_samp?: Maybe<Room_Var_Samp_Order_By>,
  variance?: Maybe<Room_Variance_Order_By>,
};

export type Room_Arr_Rel_Insert_Input = {
  data: Array<Room_Insert_Input>,
  on_conflict?: Maybe<Room_On_Conflict>,
};

export type Room_Avg_Fields = {
   __typename?: 'room_avg_fields',
  host_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

export type Room_Avg_Order_By = {
  host_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

export type Room_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Room_Bool_Exp>>>,
  _not?: Maybe<Room_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Room_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  host?: Maybe<User_Bool_Exp>,
  host_id?: Maybe<Int_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  introduction?: Maybe<String_Comparison_Exp>,
  members?: Maybe<User_Room_Bool_Exp>,
  name?: Maybe<String_Comparison_Exp>,
};

export enum Room_Constraint {
  RoomPkey = 'room_pkey'
}

export type Room_Inc_Input = {
  host_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
};

export type Room_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  host?: Maybe<User_Obj_Rel_Insert_Input>,
  host_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  introduction?: Maybe<Scalars['String']>,
  members?: Maybe<User_Room_Arr_Rel_Insert_Input>,
  name?: Maybe<Scalars['String']>,
};

export type Room_Max_Fields = {
   __typename?: 'room_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  host_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  introduction?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type Room_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  host_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  introduction?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

export type Room_Min_Fields = {
   __typename?: 'room_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  host_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  introduction?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type Room_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  host_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  introduction?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

export type Room_Mutation_Response = {
   __typename?: 'room_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Room>,
};

export type Room_Obj_Rel_Insert_Input = {
  data: Room_Insert_Input,
  on_conflict?: Maybe<Room_On_Conflict>,
};

export type Room_On_Conflict = {
  constraint: Room_Constraint,
  update_columns: Array<Room_Update_Column>,
  where?: Maybe<Room_Bool_Exp>,
};

export type Room_Order_By = {
  created_at?: Maybe<Order_By>,
  host?: Maybe<User_Order_By>,
  host_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  introduction?: Maybe<Order_By>,
  members_aggregate?: Maybe<User_Room_Aggregate_Order_By>,
  name?: Maybe<Order_By>,
};

export enum Room_Select_Column {
  CreatedAt = 'created_at',
  HostId = 'host_id',
  Id = 'id',
  Introduction = 'introduction',
  Name = 'name'
}

export type Room_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  host_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  introduction?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type Room_Stddev_Fields = {
   __typename?: 'room_stddev_fields',
  host_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

export type Room_Stddev_Order_By = {
  host_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

export type Room_Stddev_Pop_Fields = {
   __typename?: 'room_stddev_pop_fields',
  host_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

export type Room_Stddev_Pop_Order_By = {
  host_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

export type Room_Stddev_Samp_Fields = {
   __typename?: 'room_stddev_samp_fields',
  host_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

export type Room_Stddev_Samp_Order_By = {
  host_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

export type Room_Sum_Fields = {
   __typename?: 'room_sum_fields',
  host_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
};

export type Room_Sum_Order_By = {
  host_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

export enum Room_Update_Column {
  CreatedAt = 'created_at',
  HostId = 'host_id',
  Id = 'id',
  Introduction = 'introduction',
  Name = 'name'
}

export type Room_Var_Pop_Fields = {
   __typename?: 'room_var_pop_fields',
  host_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

export type Room_Var_Pop_Order_By = {
  host_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

export type Room_Var_Samp_Fields = {
   __typename?: 'room_var_samp_fields',
  host_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

export type Room_Var_Samp_Order_By = {
  host_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

export type Room_Variance_Fields = {
   __typename?: 'room_variance_fields',
  host_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

export type Room_Variance_Order_By = {
  host_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

export type Sign_Up_Input = {
  name: Scalars['String'],
  password: Scalars['String'],
};

export type Sign_Up_Response = {
   __typename?: 'sign_up_response',
  id: Scalars['Int'],
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

export type Subscription = {
   __typename?: 'Subscription',
  chat_message: Array<Chat_Message>,
  chat_message_aggregate: Chat_Message_Aggregate,
  chat_message_by_pk?: Maybe<Chat_Message>,
  chat_room_member_offline: Array<Chat_Room_Member_Offline>,
  chat_room_member_offline_aggregate: Chat_Room_Member_Offline_Aggregate,
  chat_room_member_online: Array<Chat_Room_Member_Online>,
  chat_room_member_online_aggregate: Chat_Room_Member_Online_Aggregate,
  chat_room_message: Array<Chat_Room_Message>,
  chat_room_message_aggregate: Chat_Room_Message_Aggregate,
  room: Array<Room>,
  room_aggregate: Room_Aggregate,
  room_by_pk?: Maybe<Room>,
  user: Array<User>,
  user_aggregate: User_Aggregate,
  user_by_pk?: Maybe<User>,
  user_room: Array<User_Room>,
  user_room_aggregate: User_Room_Aggregate,
  user_room_by_pk?: Maybe<User_Room>,
};


export type SubscriptionChat_MessageArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Message_Order_By>>,
  where?: Maybe<Chat_Message_Bool_Exp>
};


export type SubscriptionChat_Message_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Message_Order_By>>,
  where?: Maybe<Chat_Message_Bool_Exp>
};


export type SubscriptionChat_Message_By_PkArgs = {
  id: Scalars['Int']
};


export type SubscriptionChat_Room_Member_OfflineArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Member_Offline_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Member_Offline_Order_By>>,
  where?: Maybe<Chat_Room_Member_Offline_Bool_Exp>
};


export type SubscriptionChat_Room_Member_Offline_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Member_Offline_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Member_Offline_Order_By>>,
  where?: Maybe<Chat_Room_Member_Offline_Bool_Exp>
};


export type SubscriptionChat_Room_Member_OnlineArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Member_Online_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Member_Online_Order_By>>,
  where?: Maybe<Chat_Room_Member_Online_Bool_Exp>
};


export type SubscriptionChat_Room_Member_Online_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Member_Online_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Member_Online_Order_By>>,
  where?: Maybe<Chat_Room_Member_Online_Bool_Exp>
};


export type SubscriptionChat_Room_MessageArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Message_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Message_Order_By>>,
  where?: Maybe<Chat_Room_Message_Bool_Exp>
};


export type SubscriptionChat_Room_Message_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Message_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Chat_Room_Message_Order_By>>,
  where?: Maybe<Chat_Room_Message_Bool_Exp>
};


export type SubscriptionRoomArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Room_Order_By>>,
  where?: Maybe<Room_Bool_Exp>
};


export type SubscriptionRoom_AggregateArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Room_Order_By>>,
  where?: Maybe<Room_Bool_Exp>
};


export type SubscriptionRoom_By_PkArgs = {
  id: Scalars['Int']
};


export type SubscriptionUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type SubscriptionUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type SubscriptionUser_By_PkArgs = {
  id: Scalars['Int']
};


export type SubscriptionUser_RoomArgs = {
  distinct_on?: Maybe<Array<User_Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Room_Order_By>>,
  where?: Maybe<User_Room_Bool_Exp>
};


export type SubscriptionUser_Room_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Room_Order_By>>,
  where?: Maybe<User_Room_Bool_Exp>
};


export type SubscriptionUser_Room_By_PkArgs = {
  room_id: Scalars['Int'],
  user_id: Scalars['Int']
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};

export type User = {
   __typename?: 'user',
  created_at: Scalars['timestamptz'],
  entered_rooms: Array<User_Room>,
  entered_rooms_aggregate: User_Room_Aggregate,
  hosted_rooms: Array<Room>,
  hosted_rooms_aggregate: Room_Aggregate,
  id: Scalars['Int'],
  last_seen: Scalars['timestamptz'],
  name: Scalars['String'],
  password: Scalars['String'],
};


export type UserEntered_RoomsArgs = {
  distinct_on?: Maybe<Array<User_Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Room_Order_By>>,
  where?: Maybe<User_Room_Bool_Exp>
};


export type UserEntered_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Room_Order_By>>,
  where?: Maybe<User_Room_Bool_Exp>
};


export type UserHosted_RoomsArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Room_Order_By>>,
  where?: Maybe<Room_Bool_Exp>
};


export type UserHosted_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Room_Order_By>>,
  where?: Maybe<Room_Bool_Exp>
};

export type User_Aggregate = {
   __typename?: 'user_aggregate',
  aggregate?: Maybe<User_Aggregate_Fields>,
  nodes: Array<User>,
};

export type User_Aggregate_Fields = {
   __typename?: 'user_aggregate_fields',
  avg?: Maybe<User_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<User_Max_Fields>,
  min?: Maybe<User_Min_Fields>,
  stddev?: Maybe<User_Stddev_Fields>,
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>,
  sum?: Maybe<User_Sum_Fields>,
  var_pop?: Maybe<User_Var_Pop_Fields>,
  var_samp?: Maybe<User_Var_Samp_Fields>,
  variance?: Maybe<User_Variance_Fields>,
};


export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<User_Max_Order_By>,
  min?: Maybe<User_Min_Order_By>,
  stddev?: Maybe<User_Stddev_Order_By>,
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>,
  sum?: Maybe<User_Sum_Order_By>,
  var_pop?: Maybe<User_Var_Pop_Order_By>,
  var_samp?: Maybe<User_Var_Samp_Order_By>,
  variance?: Maybe<User_Variance_Order_By>,
};

export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>,
  on_conflict?: Maybe<User_On_Conflict>,
};

export type User_Avg_Fields = {
   __typename?: 'user_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  _not?: Maybe<User_Bool_Exp>,
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  entered_rooms?: Maybe<User_Room_Bool_Exp>,
  hosted_rooms?: Maybe<Room_Bool_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  last_seen?: Maybe<Timestamptz_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  password?: Maybe<String_Comparison_Exp>,
};

export enum User_Constraint {
  UserNameKey = 'user_name_key',
  UserPkey = 'user_pkey'
}

export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

export type User_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  entered_rooms?: Maybe<User_Room_Arr_Rel_Insert_Input>,
  hosted_rooms?: Maybe<Room_Arr_Rel_Insert_Input>,
  id?: Maybe<Scalars['Int']>,
  last_seen?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
};

export type User_Max_Fields = {
   __typename?: 'user_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  last_seen?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
};

export type User_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  last_seen?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  password?: Maybe<Order_By>,
};

export type User_Min_Fields = {
   __typename?: 'user_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  last_seen?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
};

export type User_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  last_seen?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  password?: Maybe<Order_By>,
};

export type User_Mutation_Response = {
   __typename?: 'user_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<User>,
};

export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input,
  on_conflict?: Maybe<User_On_Conflict>,
};

export type User_On_Conflict = {
  constraint: User_Constraint,
  update_columns: Array<User_Update_Column>,
  where?: Maybe<User_Bool_Exp>,
};

export type User_Order_By = {
  created_at?: Maybe<Order_By>,
  entered_rooms_aggregate?: Maybe<User_Room_Aggregate_Order_By>,
  hosted_rooms_aggregate?: Maybe<Room_Aggregate_Order_By>,
  id?: Maybe<Order_By>,
  last_seen?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  password?: Maybe<Order_By>,
};

export type User_Room = {
   __typename?: 'user_room',
  room: Room,
  room_id: Scalars['Int'],
  user: User,
  user_enter_at: Scalars['timestamptz'],
  user_id: Scalars['Int'],
  user_last_reply?: Maybe<Scalars['timestamptz']>,
  user_last_typed?: Maybe<Scalars['timestamptz']>,
};

export type User_Room_Aggregate = {
   __typename?: 'user_room_aggregate',
  aggregate?: Maybe<User_Room_Aggregate_Fields>,
  nodes: Array<User_Room>,
};

export type User_Room_Aggregate_Fields = {
   __typename?: 'user_room_aggregate_fields',
  avg?: Maybe<User_Room_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<User_Room_Max_Fields>,
  min?: Maybe<User_Room_Min_Fields>,
  stddev?: Maybe<User_Room_Stddev_Fields>,
  stddev_pop?: Maybe<User_Room_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<User_Room_Stddev_Samp_Fields>,
  sum?: Maybe<User_Room_Sum_Fields>,
  var_pop?: Maybe<User_Room_Var_Pop_Fields>,
  var_samp?: Maybe<User_Room_Var_Samp_Fields>,
  variance?: Maybe<User_Room_Variance_Fields>,
};


export type User_Room_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Room_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type User_Room_Aggregate_Order_By = {
  avg?: Maybe<User_Room_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<User_Room_Max_Order_By>,
  min?: Maybe<User_Room_Min_Order_By>,
  stddev?: Maybe<User_Room_Stddev_Order_By>,
  stddev_pop?: Maybe<User_Room_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<User_Room_Stddev_Samp_Order_By>,
  sum?: Maybe<User_Room_Sum_Order_By>,
  var_pop?: Maybe<User_Room_Var_Pop_Order_By>,
  var_samp?: Maybe<User_Room_Var_Samp_Order_By>,
  variance?: Maybe<User_Room_Variance_Order_By>,
};

export type User_Room_Arr_Rel_Insert_Input = {
  data: Array<User_Room_Insert_Input>,
  on_conflict?: Maybe<User_Room_On_Conflict>,
};

export type User_Room_Avg_Fields = {
   __typename?: 'user_room_avg_fields',
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type User_Room_Avg_Order_By = {
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type User_Room_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Room_Bool_Exp>>>,
  _not?: Maybe<User_Room_Bool_Exp>,
  _or?: Maybe<Array<Maybe<User_Room_Bool_Exp>>>,
  room?: Maybe<Room_Bool_Exp>,
  room_id?: Maybe<Int_Comparison_Exp>,
  user?: Maybe<User_Bool_Exp>,
  user_enter_at?: Maybe<Timestamptz_Comparison_Exp>,
  user_id?: Maybe<Int_Comparison_Exp>,
  user_last_reply?: Maybe<Timestamptz_Comparison_Exp>,
  user_last_typed?: Maybe<Timestamptz_Comparison_Exp>,
};

export enum User_Room_Constraint {
  UserRoomPkey = 'user_room_pkey'
}

export type User_Room_Inc_Input = {
  room_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type User_Room_Insert_Input = {
  room?: Maybe<Room_Obj_Rel_Insert_Input>,
  room_id?: Maybe<Scalars['Int']>,
  user?: Maybe<User_Obj_Rel_Insert_Input>,
  user_enter_at?: Maybe<Scalars['timestamptz']>,
  user_id?: Maybe<Scalars['Int']>,
  user_last_reply?: Maybe<Scalars['timestamptz']>,
  user_last_typed?: Maybe<Scalars['timestamptz']>,
};

export type User_Room_Max_Fields = {
   __typename?: 'user_room_max_fields',
  room_id?: Maybe<Scalars['Int']>,
  user_enter_at?: Maybe<Scalars['timestamptz']>,
  user_id?: Maybe<Scalars['Int']>,
  user_last_reply?: Maybe<Scalars['timestamptz']>,
  user_last_typed?: Maybe<Scalars['timestamptz']>,
};

export type User_Room_Max_Order_By = {
  room_id?: Maybe<Order_By>,
  user_enter_at?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
  user_last_reply?: Maybe<Order_By>,
  user_last_typed?: Maybe<Order_By>,
};

export type User_Room_Min_Fields = {
   __typename?: 'user_room_min_fields',
  room_id?: Maybe<Scalars['Int']>,
  user_enter_at?: Maybe<Scalars['timestamptz']>,
  user_id?: Maybe<Scalars['Int']>,
  user_last_reply?: Maybe<Scalars['timestamptz']>,
  user_last_typed?: Maybe<Scalars['timestamptz']>,
};

export type User_Room_Min_Order_By = {
  room_id?: Maybe<Order_By>,
  user_enter_at?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
  user_last_reply?: Maybe<Order_By>,
  user_last_typed?: Maybe<Order_By>,
};

export type User_Room_Mutation_Response = {
   __typename?: 'user_room_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<User_Room>,
};

export type User_Room_Obj_Rel_Insert_Input = {
  data: User_Room_Insert_Input,
  on_conflict?: Maybe<User_Room_On_Conflict>,
};

export type User_Room_On_Conflict = {
  constraint: User_Room_Constraint,
  update_columns: Array<User_Room_Update_Column>,
  where?: Maybe<User_Room_Bool_Exp>,
};

export type User_Room_Order_By = {
  room?: Maybe<Room_Order_By>,
  room_id?: Maybe<Order_By>,
  user?: Maybe<User_Order_By>,
  user_enter_at?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
  user_last_reply?: Maybe<Order_By>,
  user_last_typed?: Maybe<Order_By>,
};

export enum User_Room_Select_Column {
  RoomId = 'room_id',
  UserEnterAt = 'user_enter_at',
  UserId = 'user_id',
  UserLastReply = 'user_last_reply',
  UserLastTyped = 'user_last_typed'
}

export type User_Room_Set_Input = {
  room_id?: Maybe<Scalars['Int']>,
  user_enter_at?: Maybe<Scalars['timestamptz']>,
  user_id?: Maybe<Scalars['Int']>,
  user_last_reply?: Maybe<Scalars['timestamptz']>,
  user_last_typed?: Maybe<Scalars['timestamptz']>,
};

export type User_Room_Stddev_Fields = {
   __typename?: 'user_room_stddev_fields',
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type User_Room_Stddev_Order_By = {
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type User_Room_Stddev_Pop_Fields = {
   __typename?: 'user_room_stddev_pop_fields',
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type User_Room_Stddev_Pop_Order_By = {
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type User_Room_Stddev_Samp_Fields = {
   __typename?: 'user_room_stddev_samp_fields',
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type User_Room_Stddev_Samp_Order_By = {
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type User_Room_Sum_Fields = {
   __typename?: 'user_room_sum_fields',
  room_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type User_Room_Sum_Order_By = {
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export enum User_Room_Update_Column {
  RoomId = 'room_id',
  UserEnterAt = 'user_enter_at',
  UserId = 'user_id',
  UserLastReply = 'user_last_reply',
  UserLastTyped = 'user_last_typed'
}

export type User_Room_Var_Pop_Fields = {
   __typename?: 'user_room_var_pop_fields',
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type User_Room_Var_Pop_Order_By = {
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type User_Room_Var_Samp_Fields = {
   __typename?: 'user_room_var_samp_fields',
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type User_Room_Var_Samp_Order_By = {
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type User_Room_Variance_Fields = {
   __typename?: 'user_room_variance_fields',
  room_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type User_Room_Variance_Order_By = {
  room_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export enum User_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  LastSeen = 'last_seen',
  Name = 'name',
  Password = 'password'
}

export type User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  last_seen?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
};

export type User_Stddev_Fields = {
   __typename?: 'user_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Stddev_Pop_Fields = {
   __typename?: 'user_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Stddev_Samp_Fields = {
   __typename?: 'user_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Sum_Fields = {
   __typename?: 'user_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

export type User_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

export enum User_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  LastSeen = 'last_seen',
  Name = 'name',
  Password = 'password'
}

export type User_Var_Pop_Fields = {
   __typename?: 'user_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Var_Samp_Fields = {
   __typename?: 'user_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Variance_Fields = {
   __typename?: 'user_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Variance_Order_By = {
  id?: Maybe<Order_By>,
};

export type LoginMutationVariables = {
  input: Login_Input
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'login_response' }
    & Pick<Login_Response, 'token'>
    & { user: (
      { __typename?: 'logged_user' }
      & Pick<Logged_User, 'id' | 'name'>
    ) }
  ) }
);

export type SignUpMutationVariables = {
  input: Sign_Up_Input
};


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { sign_up: (
    { __typename?: 'sign_up_response' }
    & Pick<Sign_Up_Response, 'id'>
  ) }
);

export type LoggedUserQueryVariables = {};


export type LoggedUserQuery = (
  { __typename?: 'Query' }
  & { logged_user: (
    { __typename?: 'logged_user' }
    & Pick<Logged_User, 'id' | 'name'>
  ) }
);

export type RenameMutationVariables = {
  new_name: Scalars['String']
};


export type RenameMutation = (
  { __typename?: 'Mutation' }
  & { update_user: Maybe<(
    { __typename?: 'user_mutation_response' }
    & { returning: Array<(
      { __typename?: 'user' }
      & Pick<User, 'name'>
    )> }
  )> }
);

export type RoomFieldsFragment = (
  { __typename?: 'room' }
  & Pick<Room, 'id' | 'name' | 'introduction' | 'created_at' | 'host_id'>
);

export type CreateRoomMutationVariables = {
  name: Scalars['String'],
  introduction?: Maybe<Scalars['String']>
};


export type CreateRoomMutation = (
  { __typename?: 'Mutation' }
  & { insert_room: Maybe<(
    { __typename?: 'room_mutation_response' }
    & Pick<Room_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'room' }
      & RoomFieldsFragment
    )> }
  )> }
);

export type HomeQueryVariables = {
  user_id: Scalars['Int']
};


export type HomeQuery = (
  { __typename?: 'Query' }
  & { myCreatedRooms: Array<(
    { __typename?: 'room' }
    & RoomFieldsFragment
  )>, myEnteredRooms: Array<(
    { __typename?: 'user_room' }
    & { room: (
      { __typename?: 'room' }
      & RoomFieldsFragment
    ) }
  )> }
);

export type ChatRoomOnlineMemberFieldsFragment = (
  { __typename?: 'chat_room_member_online' }
  & Pick<Chat_Room_Member_Online, 'member_id' | 'member_name' | 'member_last_seen'>
);

export type ChatRoomOfflineMemberFieldsFragment = (
  { __typename?: 'chat_room_member_offline' }
  & Pick<Chat_Room_Member_Offline, 'member_id' | 'member_name' | 'member_last_seen'>
);

export type ChatRoomMessageFieldsFragment = (
  { __typename?: 'chat_room_message' }
  & Pick<Chat_Room_Message, 'id' | 'created_at' | 'message'>
  & { sender: Maybe<(
    { __typename?: 'user' }
    & Pick<User, 'id' | 'name'>
  )> }
);

export type ChatQueryVariables = {
  room_id: Scalars['Int']
};


export type ChatQuery = (
  { __typename?: 'Query' }
  & { user_room: Array<(
    { __typename?: 'user_room' }
    & { room: (
      { __typename?: 'room' }
      & Pick<Room, 'id' | 'name' | 'introduction' | 'created_at'>
      & { host: (
        { __typename?: 'user' }
        & Pick<User, 'id' | 'name'>
      ) }
    ) }
  )>, chat_room_message: Array<(
    { __typename?: 'chat_room_message' }
    & ChatRoomMessageFieldsFragment
  )>, chat_room_message_aggregate: (
    { __typename?: 'chat_room_message_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'chat_room_message_aggregate_fields' }
      & Pick<Chat_Room_Message_Aggregate_Fields, 'count'>
    )> }
  ), chat_room_member_offline: Array<(
    { __typename?: 'chat_room_member_offline' }
    & ChatRoomOfflineMemberFieldsFragment
  )>, chat_room_member_offline_aggregate: (
    { __typename?: 'chat_room_member_offline_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'chat_room_member_offline_aggregate_fields' }
      & Pick<Chat_Room_Member_Offline_Aggregate_Fields, 'count'>
    )> }
  ), chat_room_member_online: Array<(
    { __typename?: 'chat_room_member_online' }
    & ChatRoomOnlineMemberFieldsFragment
  )>, chat_room_member_online_aggregate: (
    { __typename?: 'chat_room_member_online_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'chat_room_member_online_aggregate_fields' }
      & Pick<Chat_Room_Member_Online_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type EnterRoomMutationVariables = {
  room_id: Scalars['Int']
};


export type EnterRoomMutation = (
  { __typename?: 'Mutation' }
  & { insert_user_room: Maybe<(
    { __typename?: 'user_room_mutation_response' }
    & { returning: Array<(
      { __typename?: 'user_room' }
      & { room: (
        { __typename?: 'room' }
        & RoomFieldsFragment
      ) }
    )> }
  )> }
);

export type LeaveRoomMutationVariables = {
  room_id: Scalars['Int']
};


export type LeaveRoomMutation = (
  { __typename?: 'Mutation' }
  & { delete_user_room: Maybe<(
    { __typename?: 'user_room_mutation_response' }
    & Pick<User_Room_Mutation_Response, 'affected_rows'>
  )> }
);

export type SendChatMessageMutationVariables = {
  message: Scalars['String'],
  room_id: Scalars['Int']
};


export type SendChatMessageMutation = (
  { __typename?: 'Mutation' }
  & { insert_chat_message: Maybe<(
    { __typename?: 'chat_message_mutation_response' }
    & Pick<Chat_Message_Mutation_Response, 'affected_rows'>
  )> }
);

export type EmitOnlineEventMutationVariables = {
  user_id: Scalars['Int']
};


export type EmitOnlineEventMutation = (
  { __typename?: 'Mutation' }
  & { update_user: Maybe<(
    { __typename?: 'user_mutation_response' }
    & Pick<User_Mutation_Response, 'affected_rows'>
  )> }
);

export type ChatRoomMessageSubscriptionVariables = {
  room_id: Scalars['Int']
};


export type ChatRoomMessageSubscription = (
  { __typename?: 'Subscription' }
  & { chat_room_message: Array<(
    { __typename?: 'chat_room_message' }
    & ChatRoomMessageFieldsFragment
  )> }
);

export type ChatRoomMessageAggregateSubscriptionVariables = {
  room_id: Scalars['Int']
};


export type ChatRoomMessageAggregateSubscription = (
  { __typename?: 'Subscription' }
  & { chat_room_message_aggregate: (
    { __typename?: 'chat_room_message_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'chat_room_message_aggregate_fields' }
      & Pick<Chat_Room_Message_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type ChatRoomOfflineMemberSubscriptionVariables = {
  room_id: Scalars['Int']
};


export type ChatRoomOfflineMemberSubscription = (
  { __typename?: 'Subscription' }
  & { chat_room_member_offline: Array<(
    { __typename?: 'chat_room_member_offline' }
    & ChatRoomOfflineMemberFieldsFragment
  )> }
);

export type ChatRoomOnlineMemberSubscriptionVariables = {
  room_id: Scalars['Int']
};


export type ChatRoomOnlineMemberSubscription = (
  { __typename?: 'Subscription' }
  & { chat_room_member_online: Array<(
    { __typename?: 'chat_room_member_online' }
    & ChatRoomOnlineMemberFieldsFragment
  )> }
);

export type ChatRoomOfflineMemberAggregateSubscriptionVariables = {
  room_id: Scalars['Int']
};


export type ChatRoomOfflineMemberAggregateSubscription = (
  { __typename?: 'Subscription' }
  & { chat_room_member_offline_aggregate: (
    { __typename?: 'chat_room_member_offline_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'chat_room_member_offline_aggregate_fields' }
      & Pick<Chat_Room_Member_Offline_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type ChatRoomOnlineMemberAggregateSubscriptionVariables = {
  room_id: Scalars['Int']
};


export type ChatRoomOnlineMemberAggregateSubscription = (
  { __typename?: 'Subscription' }
  & { chat_room_member_online_aggregate: (
    { __typename?: 'chat_room_member_online_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'chat_room_member_online_aggregate_fields' }
      & Pick<Chat_Room_Member_Online_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export const RoomFieldsFragmentDoc = gql`
    fragment RoomFields on room {
  id
  name
  introduction
  created_at
  host_id
}
    `;
export const ChatRoomOnlineMemberFieldsFragmentDoc = gql`
    fragment ChatRoomOnlineMemberFields on chat_room_member_online {
  member_id
  member_name
  member_last_seen
}
    `;
export const ChatRoomOfflineMemberFieldsFragmentDoc = gql`
    fragment ChatRoomOfflineMemberFields on chat_room_member_offline {
  member_id
  member_name
  member_last_seen
}
    `;
export const ChatRoomMessageFieldsFragmentDoc = gql`
    fragment ChatRoomMessageFields on chat_room_message {
  id
  created_at
  message
  sender {
    id
    name
  }
}
    `;
export const LoginDocument = gql`
    mutation Login($input: login_input!) {
  login(input: $input) {
    user {
      id
      name
    }
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
  }
export const SignUpDocument = gql`
    mutation SignUp($input: sign_up_input!) {
  sign_up(input: $input) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignUpGQL extends Apollo.Mutation<SignUpMutation, SignUpMutationVariables> {
    document = SignUpDocument;
    
  }
export const LoggedUserDocument = gql`
    query LoggedUser {
  logged_user {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoggedUserGQL extends Apollo.Query<LoggedUserQuery, LoggedUserQueryVariables> {
    document = LoggedUserDocument;
    
  }
export const RenameDocument = gql`
    mutation Rename($new_name: String!) {
  update_user(where: {}, _set: {name: $new_name}) {
    returning {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RenameGQL extends Apollo.Mutation<RenameMutation, RenameMutationVariables> {
    document = RenameDocument;
    
  }
export const CreateRoomDocument = gql`
    mutation CreateRoom($name: String!, $introduction: String) {
  insert_room(objects: {name: $name, introduction: $introduction, members: {data: {}}}) {
    affected_rows
    returning {
      ...RoomFields
    }
  }
}
    ${RoomFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRoomGQL extends Apollo.Mutation<CreateRoomMutation, CreateRoomMutationVariables> {
    document = CreateRoomDocument;
    
  }
export const HomeDocument = gql`
    query Home($user_id: Int!) {
  myCreatedRooms: room(where: {host_id: {_eq: $user_id}}) {
    ...RoomFields
  }
  myEnteredRooms: user_room {
    room {
      ...RoomFields
    }
  }
}
    ${RoomFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class HomeGQL extends Apollo.Query<HomeQuery, HomeQueryVariables> {
    document = HomeDocument;
    
  }
export const ChatDocument = gql`
    query Chat($room_id: Int!) {
  user_room(where: {room_id: {_eq: $room_id}}) {
    room {
      id
      name
      host {
        id
        name
      }
      introduction
      created_at
    }
  }
  chat_room_message(where: {room_id: {_eq: $room_id}}, order_by: {created_at: asc}) {
    ...ChatRoomMessageFields
  }
  chat_room_message_aggregate(where: {room_id: {_eq: $room_id}}) {
    aggregate {
      count
    }
  }
  chat_room_member_offline(where: {room_id: {_eq: $room_id}}) {
    ...ChatRoomOfflineMemberFields
  }
  chat_room_member_offline_aggregate(where: {room_id: {_eq: $room_id}}) {
    aggregate {
      count
    }
  }
  chat_room_member_online(where: {room_id: {_eq: $room_id}}) {
    ...ChatRoomOnlineMemberFields
  }
  chat_room_member_online_aggregate(where: {room_id: {_eq: $room_id}}) {
    aggregate {
      count
    }
  }
}
    ${ChatRoomMessageFieldsFragmentDoc}
${ChatRoomOfflineMemberFieldsFragmentDoc}
${ChatRoomOnlineMemberFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ChatGQL extends Apollo.Query<ChatQuery, ChatQueryVariables> {
    document = ChatDocument;
    
  }
export const EnterRoomDocument = gql`
    mutation EnterRoom($room_id: Int!) {
  insert_user_room(objects: {room_id: $room_id}) {
    returning {
      room {
        ...RoomFields
      }
    }
  }
}
    ${RoomFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EnterRoomGQL extends Apollo.Mutation<EnterRoomMutation, EnterRoomMutationVariables> {
    document = EnterRoomDocument;
    
  }
export const LeaveRoomDocument = gql`
    mutation LeaveRoom($room_id: Int!) {
  delete_user_room(where: {room_id: {_eq: $room_id}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LeaveRoomGQL extends Apollo.Mutation<LeaveRoomMutation, LeaveRoomMutationVariables> {
    document = LeaveRoomDocument;
    
  }
export const SendChatMessageDocument = gql`
    mutation SendChatMessage($message: String!, $room_id: Int!) {
  insert_chat_message(objects: {message: $message, room_id: $room_id}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendChatMessageGQL extends Apollo.Mutation<SendChatMessageMutation, SendChatMessageMutationVariables> {
    document = SendChatMessageDocument;
    
  }
export const EmitOnlineEventDocument = gql`
    mutation EmitOnlineEvent($user_id: Int!) {
  update_user(where: {id: {_eq: $user_id}}, _set: {last_seen: "now()"}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EmitOnlineEventGQL extends Apollo.Mutation<EmitOnlineEventMutation, EmitOnlineEventMutationVariables> {
    document = EmitOnlineEventDocument;
    
  }
export const ChatRoomMessageDocument = gql`
    subscription ChatRoomMessage($room_id: Int!) {
  chat_room_message(where: {room_id: {_eq: $room_id}}, order_by: {created_at: desc}, limit: 1) {
    ...ChatRoomMessageFields
  }
}
    ${ChatRoomMessageFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ChatRoomMessageGQL extends Apollo.Subscription<ChatRoomMessageSubscription, ChatRoomMessageSubscriptionVariables> {
    document = ChatRoomMessageDocument;
    
  }
export const ChatRoomMessageAggregateDocument = gql`
    subscription ChatRoomMessageAggregate($room_id: Int!) {
  chat_room_message_aggregate(where: {room_id: {_eq: $room_id}}) {
    aggregate {
      count
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChatRoomMessageAggregateGQL extends Apollo.Subscription<ChatRoomMessageAggregateSubscription, ChatRoomMessageAggregateSubscriptionVariables> {
    document = ChatRoomMessageAggregateDocument;
    
  }
export const ChatRoomOfflineMemberDocument = gql`
    subscription ChatRoomOfflineMember($room_id: Int!) {
  chat_room_member_offline(where: {room_id: {_eq: $room_id}}, limit: 1, order_by: {member_last_seen: desc}) {
    ...ChatRoomOfflineMemberFields
  }
}
    ${ChatRoomOfflineMemberFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ChatRoomOfflineMemberGQL extends Apollo.Subscription<ChatRoomOfflineMemberSubscription, ChatRoomOfflineMemberSubscriptionVariables> {
    document = ChatRoomOfflineMemberDocument;
    
  }
export const ChatRoomOnlineMemberDocument = gql`
    subscription ChatRoomOnlineMember($room_id: Int!) {
  chat_room_member_online(where: {room_id: {_eq: $room_id}}, limit: 1, order_by: {member_last_seen: desc}) {
    ...ChatRoomOnlineMemberFields
  }
}
    ${ChatRoomOnlineMemberFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ChatRoomOnlineMemberGQL extends Apollo.Subscription<ChatRoomOnlineMemberSubscription, ChatRoomOnlineMemberSubscriptionVariables> {
    document = ChatRoomOnlineMemberDocument;
    
  }
export const ChatRoomOfflineMemberAggregateDocument = gql`
    subscription ChatRoomOfflineMemberAggregate($room_id: Int!) {
  chat_room_member_offline_aggregate(where: {room_id: {_eq: $room_id}}) {
    aggregate {
      count
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChatRoomOfflineMemberAggregateGQL extends Apollo.Subscription<ChatRoomOfflineMemberAggregateSubscription, ChatRoomOfflineMemberAggregateSubscriptionVariables> {
    document = ChatRoomOfflineMemberAggregateDocument;
    
  }
export const ChatRoomOnlineMemberAggregateDocument = gql`
    subscription ChatRoomOnlineMemberAggregate($room_id: Int!) {
  chat_room_member_online_aggregate(where: {room_id: {_eq: $room_id}}) {
    aggregate {
      count
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChatRoomOnlineMemberAggregateGQL extends Apollo.Subscription<ChatRoomOnlineMemberAggregateSubscription, ChatRoomOnlineMemberAggregateSubscriptionVariables> {
    document = ChatRoomOnlineMemberAggregateDocument;
    
  }