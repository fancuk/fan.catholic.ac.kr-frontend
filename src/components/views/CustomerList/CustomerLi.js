import React, {Component} from"react";
import Button from '@material-ui/core/Button';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

/*
const modi = ({match}) => {
    <Link to "/member_management/'({match.params.name})'"> </Link>
}
*/


class CustomerLi extends Component{
    render(){
        return(
            <TableRow>
                <TableCell align ='center'> {this.props.student_id}</TableCell>
                <TableCell align='center'>{this.props.name}</TableCell>
                <TableCell align='center'><Button variant="contained" color= "primary" >수정</Button></TableCell>
            </TableRow>
        );
    }
}

export default CustomerLi;
