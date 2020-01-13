import produce from "immer";
import { ChatApplicationState } from '@common/types';
// import { LOAD_MESSAGE_LIST } from '@common/constants';

export const initialState: ChatApplicationState = {
    messageList: [
        {
            message:'testMessage',
            userName: 'testUser',
            uid: 'djsokm73n4d'
        }
    ],
    userName: '',
    isAuthorized: false
};

const chartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'loadMessageList':
            return produce(state, draft => {
                draft.messageList = action.messageList;
            });
        case 'sendMessage':
            return produce(state, draft => {
                draft.messageList = [...state.messageList, action.message]
            });
        case 'logIn':
            return produce(state, draft => {
                debugger
                draft.isAuthorized = true;
                draft.userName = action.user.userName;
            });
        default:
            return state;
    }
};

export default chartReducer;
