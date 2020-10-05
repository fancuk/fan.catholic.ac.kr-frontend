import React, {BaseSyntheticEvent as e} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import cookie from "react-cookies";

// props로 title 필요함
class BookDelete extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            token:cookie.load('token'),
            user_id:cookie.load('user_id')
        }
    }
    deleteBook = () => {
        let url = 'fan.catholic.ac.kr:5000/api/library/return?title='+this.props.title;
        const config = {
            headers: {
                Authorization: this.state.token
            }
        }
        axios.put(url, config)
            .then(response => {
                console.log('response : ', JSON.stringify(response));
                this.props.stateRefresh(1);
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
                <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>삭제</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle onClose={this.handleClose}>
                        도서 반납
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 도서가 반납됩니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={() => {this.deleteBook(this.props.title)}}>반납</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
};

export default BookDelete;