import React, {Component} from "react";
import {Button} from 'reactstrap';
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";


class MyDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id:this.props.user_id,
            user_pwd:this.props.user_pwd,
            delete: false
        }
    }
    deleteUser() {
        const url = 'http://fan.catholic.ac.kr:5000/api/delete/user?user_id='+this.props.user_id;
        const user = {
            user_id: this.state.user_id,
            user_pwd: this.state.user_pwd
        }
        axios.post(url,user)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            delete: false
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
                <Button outline color="danger" onClick={this.handleClickOpen}>탈퇴</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle onClose={this.handleClose}>
                        탈퇴 경고
                    </DialogTitle>
                    <DialogContent>
                        <Typography >
                            웹사이트를 탈퇴합니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button outline color="danger" onClick={(e) => {this.deleteUser(this.props.user_id)}}>탈퇴</Button>
                        <Button outline color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
};
export default (MyDelete);