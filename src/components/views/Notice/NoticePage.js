import React, {Component} from "react";
import NoticeCard from "./NoticeCard";
import {Table} from "reactstrap";
import { AiFillAlert } from "react-icons/ai";

class NoticePage extends Component {
    state = {};

    render() {
        const {data} = this.props;
        return (
            <div>
                <h2>< AiFillAlert/> 공지사항 <AiFillAlert/></h2>
                <h6> <strong> - 팬과 함께 공지를! - </strong> </h6>
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
                            <NoticeCard
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

export default NoticePage;