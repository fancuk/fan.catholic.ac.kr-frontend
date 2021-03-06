import React, {BaseSyntheticEvent as e} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import cookie from "react-cookies";

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
        if (this.state.user_id !== 'fancuk'){
            alert("관리자만 도서를 삭제할 수 있습니다.")
            return
        }
        let url = 'http://fan.catholic.ac.kr:5000/api/library/delete?title='+this.props.title;
        const config = {
            headers: {
                Authorization: this.state.token
            }
        }
        axios.delete(url, config)
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
                        삭제 경고
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 도서가 삭제됩니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={() => {this.deleteBook(this.props.title)}}>삭제</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
};

export default BookDelete;