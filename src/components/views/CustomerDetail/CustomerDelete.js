import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";


class CustomerDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    deleteCustomer() {
        const url = 'http://fan.catholic.ac.kr:5000/api/delete/user?user_id=' +this.props.user_id;
        axios.delete(url)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            open: false
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
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>탈퇴</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle onClose={this.handleClose}>
                        탈퇴 경고
                    </DialogTitle>
                    <DialogContent>
                        <Typography >
                            회원을 탈퇴시킵니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="secondary" onClick={(e) => {this.deleteCustomer(this.props.user_id)}}>탈퇴</Button>
                        <Button variant="text" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
};
export default (CustomerDelete);