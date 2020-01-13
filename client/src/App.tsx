import * as React from 'react'
import { connect } from 'react-redux';
import {ChatContainer} from "@containers/ChatContainer";
import {ControlPanel} from "@containers/ControlPanel";
import {Auth} from "@containers/Auth";
import {ChatApplicationState} from "@common/types";

interface StateToProps {
    isAuthorized: boolean;
}

class AppView extends React.Component<any, any>{
    render() {
        return (
            this.props.isAuthorized
                ? <React.Fragment>
                    <ChatContainer/>
                    <ControlPanel/>
                </React.Fragment>
                : <Auth/>
        )
    }
}

const mapStateToProps = (state: ChatApplicationState): StateToProps => {
    return ({
            isAuthorized: state.isAuthorized
            }
    )
};

export const App = connect(mapStateToProps)(AppView);

