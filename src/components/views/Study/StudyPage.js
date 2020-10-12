import React, {Component} from "react";
import StudyCard from "./StudyCard";
import {Table} from "reactstrap";
import { RiPencilLine } from "react-icons/ri";

class StudyPage extends Component {
    state = {};

    render() {
        const {Study} = this.props;
        return (
            <div>
                <h2><RiPencilLine/> 스터디 게시판 <RiPencilLine/></h2>
                <h6><strong> - 팬이랑 공부랑 - </strong></h6>
                <Table hover>
                    <thead>
                    <tr>
                        <th>게시판명</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {Study &&
                    Study.map((board) => {
                        return (
                            <StudyCard
                                board_name={board.board_name}
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