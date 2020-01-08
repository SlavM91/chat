import { LoadMessageListRequest } from '@common/types';

export const loadMessageList = (): LoadMessageListRequest => ({
    type: 'loadMessageList',
    messageList: []
});