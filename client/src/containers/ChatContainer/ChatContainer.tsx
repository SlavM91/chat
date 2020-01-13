import * as React from 'react'
import { connect } from 'react-redux'
import {ChatApplicationState, Message} from "@common/types";
import {MessageList} from "@components/MessageList";

interface ChatContainerProps {
    messageList: Array<Message>;
}

class ChatContainerView extends React.Component<ChatContainerProps, {}> {
    constructor(props) {
        super(props)
    }
    render() {
        const { messageList } = this.props;
        return <div>
            <MessageList messageList={messageList}/>
        </div>
    }
}

const mapStateToProps = (state: ChatApplicationState): ChatContainerProps => {
    return ({
            messageList: state.messageList
        }
    )
};

export const ChatContainer = connect(mapStateToProps)(ChatContainerView);
