import React, {Component} from 'react';
import {Button, Input} from 'reactstrap';
import axios from "axios";
import cookie from 'react-cookies'
import {withRouter} from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";

class Logout extends Component {
    state = {
        user_id: cookie.load("user_id"),
        token: cookie.load("token"),
        level: cookie.load("level"),
        login: cookie.load("login"),
        logout: false,
    };

    handleClick = () => {
        axios.get('http://fan.catholic.ac.kr:5000/api/logout?user_id=' + this.state.user_id)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
                if (response.data.logout) {
                    cookie.remove("user_id", {path: '/'});
                    cookie.remove("token", {path: '/'});
                    cookie.remove("level", {path: '/'});
                    cookie.remove("login", {path: '/'});
                    window.location.href = './'
                } else {
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

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <span>
                <a style={{color:'#007BFF'}} onClick={this.handleClickOpen}>Logout</a>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle id="alert-dialog-title" onClose={this.handleClose}>로그아웃 알림</DialogTitle>
                    <DialogContent>
                        <Typography>
                            로그아웃을 하시겠습니까?
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button outline color="danger" onClick={this.handleClick}>로그아웃</Button>
                        <Button outline color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
}

export default Logout;
