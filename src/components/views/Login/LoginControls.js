// 로그인 상태가 성공이라면 로그아웃을 해줘야 함 -> 로그인 상태가 실패라면 로그인을 해야함
// 로그인 유지가 안되어서 문제가 생김

import React from "react";
import {withRouter} from "react-router-dom";
import Login from "./Login";
import LogoutButton from "./LogoutButton";


class LoginControls extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let system = null;
        if (isLoggedIn) {
            system = <LogoutButton onClick={this.handleLogoutClick} />;

            //
        } else {
            system = <Login onClick={this.handleLoginClick} />;
            // 만약 로그 아웃 상태로 보이고자 했다면 - 조건부 렌더링이 안되니 되니를 보고자 만약 예시를
            // system = <LogoutButton onClick={this.handleLogoutClick} />;
        }

        return (
            <>
                <div isLoggedIn={isLoggedIn} />
                {system}
            </>
        );
    }
}

export default withRouter(LoginControls);