import produce from "immer";
import { ChatApplicationState } from '@common/types';
// import { LOAD_MESSAGE_LIST } from '@common/constants';

export const initialState: ChatApplicationState = {
    messageList: [
        {
            message:'testMessage',
            userName: 'testUser'
        }
    ],
};

const chartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'loadMessageList':
            return produce(state, draft => {
                draft.messageList = action.payload.messageList;
            });
        default:
            return state;
    }
};

export default chartReducer;
