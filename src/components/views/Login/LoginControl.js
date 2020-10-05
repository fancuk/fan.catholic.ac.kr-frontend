import React from "react";
import {withRouter} from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";


class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {login: false};
    }

    handleLoginClick() {
        this.setState({login: true});
    }

    handleLogoutClick() {
        this.setState({logout: true});
    }

    render() {
        const login = this.state.login;
        let system = null;
        if (login===true) {
            system = <Logout onClick={this.handleLogoutClick} />;
        } else {
            system = <Login onClick={this.handleLoginClick} />;
        }

        return (
            <>
                {system}
            </>
        );
    }
}

export default withRouter(LoginControl);