import * as React from 'react';
import { connect } from 'react-redux';
import { Message } from "@common/types";
import { sendMessage } from "@store/actions";

interface ControlPanelState {
    message: string;
}

interface DispatchFromProps {
    sendMessage: (message: Message) => void;
}

class ControlPanelView extends React.Component<any, ControlPanelState>{
    state = {
        message: ''
    };

    submitHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const { message } = this.state;
        if (message) {
            this.props.sendMessage({ userName: 'TESTUSER!!!', message: this.state.message })
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

export const ControlPanel = connect(null, mapDispatchToProps)(ControlPanelView);
