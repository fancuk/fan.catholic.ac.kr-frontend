import React, {Component} from 'react';
import {Button} from 'reactstrap';
import axios from "axios";
import cookie from 'react-cookies'
import {withRouter} from "react-router-dom";

class Logout extends Component {
    state = {
        user_id:cookie.load("user_id"),
        token:cookie.load("token"),
        level:cookie.load("level"),
        login:cookie.load("login"),
        logout:false,
    };
    handleClick = () => {
        axios.get('http://fan.catholic.ac.kr:5000/api/logout?user_id='+this.state.user_id)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
                if (response.data.logout){
                    cookie.remove("user_id",{path:'/'});
                    cookie.remove("token",{path:'/'});
                    cookie.remove("level",{path:'/'});
                    cookie.remove("login",{path:'/'});
                    window.location.href='./'
                }
                else {
                    alert("다시 로그아웃 하세요")
                }
            })
            .catch(e => {
                console.log(e);
            })

        this.setState({
            logout: false
        })
    }
    render() {
        return (
            <Button outline color="primary" type='submit' onClick={this.handleClick}>로그아웃</Button>
        );
    }
}

export default withRouter(Logout);