import React, { Component } from "react";
import Bookcard from "./Bookcard";
import { Table } from "reactstrap";
import BookAdd from "./BookAdd";
import cookie from "react-cookies";
import BookSearch from "./BookSearch";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const tablestyle = {
    width: "80%",
    margin: "1% auto",
}

class Listpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id:cookie.load('user_id'),
        }
        console.log("user_id: "+this.state.user_id)
    }
    render() {
        const { Books } = this.props;
        return (
            <>
                <Table style={tablestyle} hover>
                    <thead>
                        <tr>
                            <th>도서 이미지</th>
                            <th>제목</th>
                            <th>저자</th>
                            {
                                this.props.rented?<th>대여자</th>:<th>남은 도서</th>
                            }
                            {
                                this.props.rented?'':<th></th>
                            }
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
                                    stateRefresh = {this.props.stateRefresh}
                                    rented={this.props.rented}
                                />
                            );
                        })}
                        {
                            this.state.user_id !== 'fancuk' ? "" :
                                <tr colSpan="5" align="center">
                                    <BookAdd stateRefresh={this.props.stateRefresh}/>
                                </tr>
                        }
                    </tbody>
                </Table>
            </>
        );
    }
}
export default Listpage;
