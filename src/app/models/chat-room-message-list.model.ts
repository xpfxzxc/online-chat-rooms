interface Message {
  id: number;
  sender: {
    id: number;
    name: string;
  };
  content: string;
  sentAt: string;
}

export interface ChatRoomMessageList {
  list: Message[];
}
