export type Message = {
  id: number;
  content: string;
  sender: string;
  time: Date;
  isSelf: boolean;
};

export type ChatType = 'direct' | 'group';

export type Chat = {
  id: number;
  name: string;
  lastMessage: string;
  time: Date;
  unread: number;
  messages: Message[];
  participants: number;
  type: ChatType;
};

export type Theme = 'light' | 'dark' | 'system';