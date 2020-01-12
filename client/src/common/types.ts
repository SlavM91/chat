import { Action } from 'redux';

export interface User {
    userName: string;
    password: string;
}

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

export interface SendMessageRequest extends Action {
    type: 'sendMessage';
    message: Message;
}

export interface LogInRequest extends Action {
    type: 'logIn';
    user: User;
}