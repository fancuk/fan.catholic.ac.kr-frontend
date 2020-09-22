import React, { Component } from "react";
import { Table } from "reactstrap";
import MyCard from "./MyCard";

class MyList extends Component {
    state = {};

    render() {
        const { Users } = this.props;
        return (
            <Table hover>
                <thead>
                <tr>
                    <th>내 도서 목록</th>
                </tr>
                </thead>
                <tbody>
                {Users &&
                Users.map((user) => {
                    return (
                        <MyCard
                            user_id={user.user_id}
                            stateRefresh = {this.props.stateRefresh}
                        />
                    );
                })}
                </tbody>
            </Table>
        );
    }
}
export default MyList;
