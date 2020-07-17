import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import BookDelete from "./BookDelete";

class Book extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell align='center'>{this.props.seqNo}</TableCell>
                <TableCell align='center'><img src={this.props.image} alt="profile" width='100' height='130'/></TableCell>
                <TableCell align='center'>{this.props.title}</TableCell>
                <TableCell align='center'>{this.props.writer}</TableCell>
                <TableCell align='center'>{this.props.count}</TableCell>
                <TableCell align='center'><BookDelete stateRefresh={this.props.stateRefresh} seqNo={this.props.seqNo} /></TableCell>
            </TableRow>
        )
    }
}

export default Book;