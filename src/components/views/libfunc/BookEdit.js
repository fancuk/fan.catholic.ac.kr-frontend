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

const styles = theme => ({
    hidden: {
        display: 'none'
    },
    menu: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class BookEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            title: this.props.title,
            writer: this.props.writer,
            count: this.props.count,
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        let url = 'http://fan.catholic.ac.kr:5000/api/library/edit';
        const post = {
            edit_image: this.state.image,
            edit_count: Number(this.state.count)
        }
        axios.post(url, post)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            image: this.state.image,
            count: this.state.count,
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
            title: '',
            writer: '',
            count: null,
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <span className="menu">
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    도서 수정하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>도서 수정</DialogTitle>
                    <DialogContent>
                        <TextField label="title" type="text" name="title"  value={this.state.title} onChange={this.handleValueChange} /><br/>
                        <TextField label="writer" type="text" name="writer"  value={this.state.writer} onChange={this.handleValueChange} /><br/>
                        <TextField label="imageURL" type="text" name="image"  value={this.state.image} onChange={this.handleValueChange} /><br/>
                        <TextField label="count" type="text" name="count"  value={this.state.count} onChange={this.handleValueChange} /><br/>
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

export default withStyles(styles)(BookEdit);