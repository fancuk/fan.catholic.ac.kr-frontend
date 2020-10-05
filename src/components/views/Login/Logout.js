import React, {Component} from 'react';
import {Button} from 'reactstrap';
import axios from "axios";
import cookie from 'react-cookies'
import {withRouter} from "react-router-dom";

class Logout extends Component {
    state = {
        user_id:cookie.load("user_id"),
        token:cookie.load("token"),
        logout:false,
    };
    handleClick = () => {
        axios.get('http://fan.catholic.ac.kr:5000/api/logout?user_id='+cookie.load("user_id"))
            .then(response => {
                console.log('response : ', JSON.stringify(response))
                if (response.data.logout==="True"){
                    const cookieOptions = {
                        path:'/',
                        httponly:false,
                    }
                    cookie.remove("user_id",cookieOptions);
                    cookie.remove("token",cookieOptions);
                    window.location.href='/'
                }
                else if (!response.data.logout){
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