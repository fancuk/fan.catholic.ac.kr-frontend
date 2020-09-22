import React from "react";
import {withRouter} from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";


class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isloggedin: false};
    }

    handleLoginClick() {
        this.setState({isloggedin: true});
    }

    handleLogoutClick() {
        this.setState({isloggedin: false});
    }

    render() {
        const isloggedin = this.state.isloggedin;
        let system = null;
        if (isloggedin) {
            system = <Logout onClick={this.handleLogoutClick} />;

            //
        } else {
            system = <Login onClick={this.handleLoginClick} />;
        }

        return (
            <>
                <div isloggedin="false"/>
                {system}
            </>
        );
    }
}

export default withRouter(LoginControl);