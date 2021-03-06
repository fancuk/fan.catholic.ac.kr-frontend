import React from "react";
import axios, { post } from 'axios';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import cookie from "react-cookies";

const styles = theme => ({
    hidden: {
        display: 'none'
    },
    menu: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class Rental extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            renter: 'test',
            token:cookie.load('token'),
            user_id:cookie.load('user_id')
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        let url = 'http://fan.catholic.ac.kr:5000/api/library/rent';
        const post = {
            title: this.props.title,
            renter: this.state.renter,
        }
        const config = {
            headers: {
                Authorization: this.state.token
            }
        }
        axios.post(url, post, config)
            .then(response => {
                console.log('response : ', JSON.stringify(response));
                alert("도서를 대여했습니다.");
                this.props.stateRefresh(1);
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            renter: '',
            open: false
        })

    }
    handleClickOpen = () => {
        if(!this.state.user_id){
            alert('로그인이 필요한 서비스입니다.')
            document.location.href = "./login"
            return
        }
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            title: '',
            open: false
        })
    }

    render() {
        return (
            <span className="menu">
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    도서 대여하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    {(this.props.count < 1 || this.state.user_id === "" || this.state.user_id === null) ?
                        <>
                            <DialogTitle>
                                도서를 대여할 수 없습니다.
                            </DialogTitle>
                            <DialogActions>
                                <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                            </DialogActions>
                        </>
                        :<>
                            <DialogTitle>
                                <img width='100' height='130' src={this.props.image} alt={this.props.title} /><br/>
                                도서: {this.props.title}<br/>
                                저자: {this.props.writer}
                            </DialogTitle>
                            <DialogContent>
                                <p>도서를 대여하시겠습니까?</p>
                            </DialogContent>
                            <DialogActions>
                                <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>대여</Button>
                                <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                            </DialogActions>
                        </>}
                </Dialog>
            </span>
        );
    }

}

export default withStyles(styles)(Rental);