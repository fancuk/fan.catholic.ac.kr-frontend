import React, {Component} from"react";
import Button from '@material-ui/core/Button';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
class CustomerDe extends Component{
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
                <TableCell align='center'>{this.props.rent} </TableCell>{/*도서대출페이지로 링크이동*/}
                <TableCell align='center'>
                    <select id="level">
                        <option>O</option>
                        <option>X</option>
                    </select>{/*값이 false이면 지불x, 값이 true이면 지불o {this.props.payment}*/}
                </TableCell>
                <TableCell align='center'>
                    <select id="level">
                        <option>정회원</option>
                        <option>준회원</option>
                    </select>{/*값이 false이면 준회원, 값이 true이면 정회원 {this.props.level}*/}
                </TableCell>
                <TableCell align='center'><Button variant="contained" color= "primary" /*onclick={modi()}*/>저장</Button></TableCell>
                <TableCell align='center'><Button variant="contained" color= "primary" onclick= {this.handleClickOpen} >삭제</Button></TableCell>
            </TableRow>
        );
    }
}

export default CustomerDe;
