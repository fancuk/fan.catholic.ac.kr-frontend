import React, {Component} from "react";
import {Button, Input} from 'reactstrap';
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import cookie from "react-cookies";



class MyDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id:cookie.load("user_id"),
            token:cookie.load("token"),
            user_pwd:this.props.user_pwd,
            delete: false
        }
    }

    deleteUser() {
        const url = 'http://fan.catholic.ac.kr:5000/api/delete/user?user_id='+cookie.load("user_id");
        const user = {
            user_id:cookie.load("user_id"),
            token:cookie.load("token"),
            user_pwd:this.state.user_pwd
        }
        const config ={
            headers:{authorization:this.state.token}
        }
        axios.post(url, user, config)
            .then(response => {
                if (response.data.delete === "True") {
                    alert("탈퇴 완료 하였습니다.")
                    window.location.href = '/'
                } else if (!response.data.delete) {
                    console.log('response : ', JSON.stringify(response));
                    alert("다시 확인 하세요")
                }
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            delete: false
        })

    }
    handleInput = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
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
                <Button outline color="danger" onClick={this.handleClickOpen}>탈퇴</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle id="alert-dialog-title"  onClose={this.handleClose} > 탈퇴 경고</DialogTitle>
                    <DialogContent>
                            <Input
                                type='password'
                                name='user_pwd'
                                placeholder='패스워드'
                                defaultValue={this.state.user_pwd}
                                onInput={this.handleInput}
                            />
                        <Typography >
                            웹 사이트를 탈퇴합니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button outline color="danger" onClick={() => {this.deleteUser(this.props.user_id)}}>탈퇴</Button>
                        <Button outline color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
}

export default MyDelete;