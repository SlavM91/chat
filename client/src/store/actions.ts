import { LoadMessageListRequest, SendMessageRequest, LogInRequest } from '@common/types';

export const loadMessageList = (): LoadMessageListRequest => ({
    type: 'loadMessageList',
    messageList: []
});

export const sendMessage = (message): SendMessageRequest => ({
    type: 'sendMessage',
    message
});

export const logIn = (user): LogInRequest => ({
    type: 'logIn',
    user
});