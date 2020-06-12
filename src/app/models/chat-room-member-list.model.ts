interface Member {
  id: number;
  name: string;
  lastSeen: string;
}

export interface ChatRoomMemberList {
  online: Member[];
  offline: Member[];
}
