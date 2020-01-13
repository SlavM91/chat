import * as React from 'react'
import { connect } from 'react-redux'
import {ChatApplicationState, Message} from "@common/types";

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
                <div key={el.uid}>
                    <span>Username-{el.userName}</span>
                    <br/>
                    <span>Message-{el.message}</span>
                </div>
                )
            }
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
