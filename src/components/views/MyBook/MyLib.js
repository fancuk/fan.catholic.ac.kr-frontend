import React, { Component } from "react";
import MyRent from "./MyRent";
import { Table } from "reactstrap";
const tablestyle = {
    width: "80%",
    margin: "1% auto",
}
class MyLib extends Component {
    state = {};
    render() {
        const { Lists } = this.props;
        console.log(Lists)
        return (
            <Table style={tablestyle} hover>
                <thead>
                <tr>
                    <th>도서 이미지</th>
                    <th>제목</th>
                    <th>저자</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {Lists &&
                Lists.map((book) => {
                    return (
                        <MyRent
                            image={book.image}
                            title={book.title}
                            writer={book.writer}
                            stateRefresh = {this.props.stateRefresh}
                        />
                    );
                })}
                </tbody>
            </Table>
        );
    }
}
export default MyLib;