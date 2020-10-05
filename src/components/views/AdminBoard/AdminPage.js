import React, {Component} from "react";
import AdminCard from "./AdminCard";
import {Table} from "reactstrap";
import { AiFillAlert } from "react-icons/ai";

class AdminPage extends Component {
    state = {};

    render() {
        const {data} = this.props;
        return (
            <div>
                <h2>< AiFillAlert/> 관리자 게시판 <AiFillAlert/></h2>
                <Table hover>
                    <thead>
                    <tr>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {data &&
                    data.map((board) => {
                        return (
                            <AdminCard
                                title={board.title}
                                writer={board.writer}
                                date={board.date}
                            />
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default AdminPage;