import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
import 'url-search-params-polyfill';
import cookie from "react-cookies";

class AdminEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board_name:this.props.board_name,
            title: this.props.title,
            writer: this.props.writer,
            content:this.props.content,
            date:this.props.date,
            open: false,
            token:cookie.load('token'),
            user_id:cookie.load('user_id')
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        let url = 'fan.catholic.ac.kr:5000/api/post/edit'
        const board = {
            edit_title: this.state.title,
            edit_content: this.state.content,
        }
        axios.put(url, board,{ headers: { Authorization: ` ${cookie.load('token')}` } })
            .then(response => {
                console.log('response : ', JSON.stringify(response))
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            board_name:this.state.board_name,
            title: this.state.title,
            writer: this.state.writer,
            date:this.state.date,
            content:this.state.content,
            open: false
        })
    }

    handleValueChange = (e) => {
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
            board_name:'',
            title: '',
            writer: '',
            date:'',
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <span className="menu">
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    공지 수정하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>공지 수정</DialogTitle>
                    <DialogContent>
                        <TextField label="board_name" type="text" name="board_name"  value={this.state.board_name} onChange={this.handleValueChange} /><br/>
                        <TextField label="writer" type="text" name="writer"  value={this.state.writer} onChange={this.handleValueChange} /><br/>
                        <TextField label="title" type="text" name="title"  value={this.state.title} onChange={this.handleValueChange} /><br/>
                        <TextField label="date" type="text" name="date"  value={this.state.date} onChange={this.handleValueChange} /><br/>
                        <TextField label="content" type="text" name="content"  value={this.state.content} onChange={this.handleValueChange} /><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>수정</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }

}

export default withStyles(AdminEdit);