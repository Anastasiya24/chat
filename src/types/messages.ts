export type MessageType = {
  senderId: string | null;
  text: string;
  time: string;
  _id?: string;
};

export type MessagesStateType = {
  list: Array<MessageType>;
};

export type MessagesStoreType = {
  messages: MessagesStateType;
};

export type RequestMessageOptions = {
  message: MessageType;
};
