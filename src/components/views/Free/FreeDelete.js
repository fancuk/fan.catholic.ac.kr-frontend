// import React, {BaseSyntheticEvent as e} from 'react';
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import axios from "axios";
// import cookie from "react-cookies";
//
// class StudyDelete extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             board_name:'freeBoard',
//             title:this.props.title,
//             writer:cookie.load('user_id'),
//             open: false,
//             token:cookie.load('token')
//         }
//     }
//     deleteStudy () {
//         let url = 'http://fan.catholic.ac.kr:5000/api/post/delete'
//         const study = {
//             board_name: 'studyBoard',
//             title: this.props.title,
//             writer: cookie.load('user_id'),
//             open: false,
//             token: cookie.load('token')
//         }
//         axios.delete(url, {headers: {Authorization: ` ${cookie.load('token')}`}})
//             .then(response => {
//                 if (response.data.delete) {
//                     window.location.href = '/study'
//                 } else {
//                     console.log('response : ', JSON.stringify(response));
//                     alert("다시 확인 하세요")
//                 }
//             })
//             .catch(e => {
//                 console.log(e);
//             })
//         this.setState({
//             delete: false
//         })
//     }
//
//     handleClickOpen = () => {
//         this.setState({
//             open: true
//         });
//     }
//
//     handleClose = () => {
//         this.setState({
//             open: false
//         })
//     }
//     render() {
//         return (
//             <span>
//                 <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>삭제</Button>
//                 <Dialog open={this.state.open} onClose={this.handleClose}>
//                     <DialogTitle onClose={this.handleClose}>
//                         삭제 경고
//                     </DialogTitle>
//                     <DialogContent>
//                         <Typography gutterBottom>
//                             선택한 게시물이 삭제됩니다.
//                         </Typography>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button variant="contained" color="primary" onClick={(e) => {this.deleteNotice()}}>삭제</Button>
//                         <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
//                     </DialogActions>
//                 </Dialog>
//             </span>
//         );
//     }
// };
//
// export default StudyDelete;