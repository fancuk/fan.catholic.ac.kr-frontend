import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import {Button} from 'reactstrap';
import axios from 'axios';

class MyEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: 'test',
            user_pwd:this.props.user_pwd,
            name: this.props.name,
            student_id: this.props.student_id,
            grade: this.props.grade,
            semester: this.props.semester,
            phone:this.props.phone,
            email:this.props.email,
            edit: false
        }
    }


    handleFormSubmit = (e) => {
        e.preventDefault()
        let url = 'http://fan.catholic.ac.kr:5000/api/profile/edit';
        const edit = {
            user_id: this.state.user_id,
            user_pwd:this.state.user_pwd,
            name: this.state.name,
            student_id: this.state.student_id,
            grade: this.state.grade,
            semester: this.state.semester,
            phone:this.state.phone,
            email:this.state.email
        }
        console.log(edit)
        axios.put(url, edit)
            .then(response => {
                console.log('response : ', JSON.stringify(response));
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            edit:false
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
            open: false
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <span>
                <Button outline color="primary" onClick={this.handleClickOpen}>수정</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>마이페이지 수정</DialogTitle>
                    <DialogContent>
                        <TextField label="user_id" type="text" name="user_id"  value={this.state.user_id}/><br/>
                        <TextField label="user_pwd" type="password" name="user_pwd"  value={this.state.user_pwd}  onChange={this.handleValueChange} /><br/>
                        <TextField label="name" type="text" name="name"  value={this.state.name}  onChange={this.handleValueChange} /><br/>
                        <TextField label="student_id" type="text" name="student_id"  value={this.state.student_id}  onChange={this.handleValueChange} /><br/>
                        <TextField label="grade" type="text" name="grade"  value={this.state.grade}  onChange={this.handleValueChange} /><br/>
                        <TextField label="semester" type="text" name="semester"  value={this.state.semester}  onChange={this.handleValueChange} /><br/>
                        <TextField label="phone" type="text" name="phone"  value={this.state.phone} onChange={this.handleValueChange} /><br/>
                        <TextField label="email" type="text" name="email"  value={this.state.email} onChange={this.handleValueChange} /><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button outline color="primary" onClick={this.handleFormSubmit}>저장</Button>
                        <Button outline color="secondary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
}

export default (MyEdit);

