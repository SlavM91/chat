import * as React from 'react';
import { connect } from 'react-redux';

interface ControlPanelState {
    message: string;
}

class ControlPanelView extends React.Component<any, ControlPanelState>{
    submitHandler = (event) => {
        event.preventDefault();
        debugger;
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

export const ControlPanel = connect(store => store)(ControlPanelView);
