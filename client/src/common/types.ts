import { Action } from 'redux';

export interface Message {
    userName: string;
    message: string;
}

export interface ChatApplicationState {
    messageList: Array<Message>;
}

export interface LoadMessageListRequest extends Action {
    type: 'loadMessageList';
    messageList: Array<Message | void>;
}