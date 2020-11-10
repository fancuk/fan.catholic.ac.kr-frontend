import React, {Component} from "react";
import StudyCard from "./StudyCard";
import {Table} from "reactstrap";

class StudyPage extends Component {
    state = {};

    render() {
        const {data} = this.props;
        return (
            <div>
                <h2>공부 게시판</h2>
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
                            <StudyCard
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

export default StudyPage;