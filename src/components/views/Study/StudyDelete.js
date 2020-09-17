import React, {BaseSyntheticEvent as e} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

class StudyDelete extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            board_name:'studyBoard',
            title:this.props.title,
            writer:this.props.writer,
            date:this.props.date,
            delete: false
        }
    }
    deleteBoard = () => {
        let url = 'http://fan.catholic.ac.kr:5000/api/board/delete?board_name=studyBoard'
        axios.delete(url)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            board_name:'studyBoard',
            title: this.state.title,
            writer: this.state.writer,
            date: this.state.date,
            delete:false
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
                            선택한 게시물이 삭제됩니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {this.deleteBoard(this.props.title)}}>삭제</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
};

export default StudyDelete;