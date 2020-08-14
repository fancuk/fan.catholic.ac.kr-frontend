import React, {Component} from "react";


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
            <button onClick={(e) => {this.props.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }
}
export default (CustomerDelete);