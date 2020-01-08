import React, { Component } from 'react';
import { Message} from "@components/Message";

type MessageListProps = {
    messageList: Array<{userName: string;message: string}>;
};

type MessageListState = {};

export class MessageList extends Component<MessageListProps, MessageListState> {
    render() {
        return(
            <React.Fragment>
                {
                    this.props.messageList.map(el => <Message {...el} key={Math.random()}/>)
                }
            </React.Fragment>
        )
    }
}