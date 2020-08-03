import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import BookAdd from "./BookAdd";
import Renter from './Renter';

class RentBook extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell align='center'><img src={this.props.image} alt="profile" width='100' height='130'/></TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell align='center'>{this.props.writer}</TableCell>
                <TableCell align='center'>대여자가 들어갈 예정입니다.</TableCell>
                <TableCell align='center'>{this.props.count}</TableCell>
            </TableRow>
        )
    }
}

export default RentBook;