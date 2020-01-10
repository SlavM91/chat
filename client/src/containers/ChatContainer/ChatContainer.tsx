import * as React from 'react'
import { connect } from 'react-redux'
import {Message} from "@common/types";

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
            {
                messageList.map(el =>
                <div key={Math.random()}>
                    <span>Username-{el.userName}</span>
                    <br/>
                    <span>Message-{el.message}</span>
                </div>
                )
            }
        </div>
    }
}

// const mapStateToProps =

export const ChatContainer = connect(store => store)(ChatContainerView);
