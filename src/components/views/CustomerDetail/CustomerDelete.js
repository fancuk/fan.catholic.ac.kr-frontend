import React, {Component} from "react";
import Button from "@material-ui/core/Button";


class CustomerDelete extends Component {

    deleteCustomer(id) {
        const url = 'https' +id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }
    render() {
        return(
            <Button variant="contained" color= "secondary" onClick={(e) => {this.props.deleteCustomer(this.props.id)}}>탈퇴</Button>
        )
    }
}
export default (CustomerDelete);