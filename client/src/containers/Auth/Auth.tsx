import * as React from "react";
import { connect } from "react-redux";
import { User } from "@common/types";
import { logIn } from "@store/actions";

interface AuthState extends User {
    [type: string]: string;
}

interface DispatchFromProps {
    logIn: (user: User) => void;
}

class AuthView extends React.Component<any, AuthState>{
    state = {
        userName: '',
    };

    handleChange = (event) => {
      const type: string = event.target.name;
      const value: string = event.target.value;
      if (type && value) {
          this.setState({ [type]: value });
      }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        debugger;
        const { userName } = this.state;
        this.props.logIn({ userName })
    };

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="userName"
                        />
                    </label>
                    <input type='submit' value="Log In" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch): DispatchFromProps => {
    return {
        logIn: (user: User) => dispatch(logIn(user)),
    }
};

export const Auth = connect(null, mapDispatchToProps)(AuthView);
