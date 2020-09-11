import React, { Component } from "react";
import Bookcard from "./Bookcard";
import { Table } from "reactstrap";
import BookAdd from "./BookAdd";

const tablestyle = {
    width: "80%",
    margin: "1% auto",
}
const tablebody ={
}

class Listpage extends Component {
    state = {};

    render() {
        const { Books } = this.props;
        return (
            <Table style={tablestyle} hover>
                <thead>
                    <tr>
                        <th>도서 이미지</th>
                        <th>제목</th>
                        <th>저자</th>
                        <th>남은 도서</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {Books &&
                        Books.map((book) => {
                            return (
                                <Bookcard
                                    image={book.image}
                                    title={book.title}
                                    writer={book.writer}
                                    count={book.count}
                                />
                            );
                        })}
                </tbody>

            </Table>
        );
    }
}
export default Listpage;
