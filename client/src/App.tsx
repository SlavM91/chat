import * as React from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {ChatContainer} from "@containers/ChatContainer";
import {ControlPanel} from "@containers/ControlPanel";
import {Auth} from "@containers/Auth";
import {ChatApplicationState} from "@common/types";

interface StateToProps {
    isAuthorized: boolean;
}

class AppView extends React.Component<any, any>{
    render() {
        debugger;
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        Chat on react
                    </Route>
                    <Route path="/login">
                        <Auth />
                    </Route>
                    <Route path="/chat">
                        <React.Fragment>
                            <ChatContainer/>
                            <ControlPanel/>
                        </React.Fragment>
                    </Route>
                    <Route
                        render={({ location }) =>
                            !this.props.isAuthorized ? (
                              <Auth />
                            ) : (
                                <Redirect
                                    to={{
                                        pathname: "/chat",
                                        state: { from: location }
                                    }}
                                />
                            )
                        }
                    />
                </Switch>
            </Router>
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

