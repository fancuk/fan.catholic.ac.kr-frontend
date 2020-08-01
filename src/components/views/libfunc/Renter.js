import React, { Component } from 'react';
import TableCell from "@material-ui/core/TableCell";

class Renter extends Component {
    render() {
        return (
            <TableCell align='center'>{this.props.user_id}/{this.props.date}</TableCell>
        );
    }
};

export default Renter;
