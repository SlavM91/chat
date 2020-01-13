import * as React from 'react';
import { connect } from 'react-redux';
import {ChatApplicationState, Message} from "@common/types";
import { sendMessage } from "@store/actions";

interface ControlPanelState {
    message: string;
}

interface DispatchFromProps {
    sendMessage: (message: Message) => void;
}

interface StateToProps {
    userName: string;
}

class ControlPanelView extends React.Component<any, ControlPanelState>{
    state = {
        message: ''
    };

    submitHandler = (event) => {
        event.preventDefault();
        const { message } = this.state;
        const { userName } = this.props;
        const uid = Math.random().toString(35).substr(2, 11);
        if (message) {
            this.setState({message: ''});
            this.props.sendMessage({ userName, message, uid })
        }
    };

    changeHandler = (event) => {
        this.setState({message: event.target.value});
    };

    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        value={this.state.message}
                        onChange={this.changeHandler}
                        type="text"/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch): DispatchFromProps => {
    return {
        sendMessage: (message: Message) => dispatch(sendMessage(message)),
    }
};

const mapStateToProps = (state: ChatApplicationState): StateToProps => {
    return ({
            userName: state.userName
        }
    )
};

export const ControlPanel = connect(mapStateToProps, mapDispatchToProps)(ControlPanelView);
