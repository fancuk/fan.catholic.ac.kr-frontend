import React from "react";
import  { post } from 'axios';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});

class  BookAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            title: '',
            writer: '',
            count: null,
            DATE: '',
            renter: '',
            fileName: '',
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
            console.log(response.data);
            this.props.stateRefresh();
        })
        this.setState({
            file: null,
            title: '',
            writer: '',
            count: null,
            renter: '',
            fileName: '',
            open: false
        })

    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = 'api/library';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('title', this.state.title);
        formData.append('writer', this.state.writer);
        formData.append('count', this.state.count);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            file: null,
            title: '',
            writer: '',
            count: null,
            DATE: '',
            renter: '',
            fileName: '',
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    도서 추가하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>도서 추가</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accrpt="image/*" id="raised-button-file" type="file" title={this.state.title} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="primary" component="span" name="file">
                                {this.state.fileName === "" ? "도서 이미지 선택" : this.state.fileName}
                            </Button>
                        </label>
                        <br/>
                        <TextField label="title" type="text" name="title"  value={this.state.title} onChange={this.handleValueChange} /><br/>
                        <TextField label="writer" type="text" name="writer"  value={this.state.writer} onChange={this.handleValueChange} /><br/>
                        <TextField label="count" type="text" name="count"  value={this.state.count} onChange={this.handleValueChange} /><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
            /*<form onSubmit={this.handleFormSubmit}>
                <h1>도서 추가</h1>
                도서 이미지: <input type="file" name="file" title={this.state.title}value={this.state.fileName} onChange={this.handleFileChange} /><br/>
                제목: <input type="text" name="title"  placeholder="title" value={this.state.title} onChange={this.handleValueChange} /><br/>
                저자: <input type="text" name="writer"  placeholder="writer" value={this.state.writer} onChange={this.handleValueChange} /><br/>
                도서 개수: <input type="text" name="count"  placeholder="count" value={this.state.count} onChange={this.handleValueChange} /><br/>
                <button type="submit">추가하기</button>
            </form>*/
        );
    }

}

export default withStyles(styles)(BookAdd);