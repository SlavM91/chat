import * as React from 'react';
import { MessageItem } from "@components/Message";
import { Message } from "@common/types";

interface MessageListProps {
    messageList: Array<Message>;
}

export const MessageList: React.FunctionComponent<MessageListProps>  = ({ messageList }) => <React.Fragment>
    {
        messageList.length > 0
            ? messageList.map(el => <MessageItem {...el} key={el.uid}/>)
            : <span>No message yet</span>
    }
</React.Fragment>;
