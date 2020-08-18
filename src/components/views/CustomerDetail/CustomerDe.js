import React, {Component} from"react";
import Button from '@material-ui/core/Button';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import CustomerDelete from "./CustomerDelete";

class CustomerDe extends Component{
    state = {
        loading: false,
        details: []
    };
    loadList = async () => {
        axios.get('http://fan.catholic.ac.kr:5000/api/manage/list')
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    details: data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };
    levelEdit = async () => {
        axios.put('http://fan.catholic.ac.kr:5000/api/manage/edit')
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    details: data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };
    pwReset = async () => {
        axios.put('http://fan.catholic.ac.kr:5000/api/reset/pwd')
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    details: data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };
    componentDidMount() {
        this.loadList();
        this.levelEdit();
        this.pwReset();
    }
    render(){
        return(
            <TableRow>
                <TableCell align ='center'> {this.props.student_id} </TableCell>
                <TableCell align='center'>{this.props.name} </TableCell>
                <TableCell align='center'>{this.props.id} </TableCell>
                <TableCell align='center'>{this.props.grade} </TableCell>
                <TableCell align='center'>{this.props.semester} </TableCell>
                <TableCell align='center'>{this.props.phone} </TableCell>
                <TableCell align='center'>{this.props.email} </TableCell>
                <TableCell align='center'>{this.props.rent} </TableCell>{/*내 도서 대출 페이지로 링크 이동*/}
                <TableCell align='center'>
                    <select id="level">
                        <option>정회원</option>
                        <option>준회원</option>
                    </select>{/*값이 false이면 준회원, 값이 true이면 정회원 {this.props.level}*/}
                </TableCell>
                <TableCell align='center'><Button variant="contained" color= "primary">Reset</Button></TableCell>
                <TableCell align='center'><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
                <TableCell align='center'><Button variant="contained" color= "primary" /*onclick={modi()}*/>저장</Button></TableCell>
            </TableRow>
        );
    }
}

export default CustomerDe;
