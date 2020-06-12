export interface ChatRoomSubtitle {
  host: {
    id: number;
    name: string;
  };
  totalMessages: number;
  totalOnlineMembers: number;
  totalOfflineMembers: number;
}
