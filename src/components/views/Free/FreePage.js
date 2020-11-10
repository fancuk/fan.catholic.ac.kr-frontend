import React, {Component} from "react";
import FreeCard from "./FreeCard";
import {Table} from "reactstrap";

class FreePage extends Component {
    state = {};

    render() {
        const {data} = this.props;
        return (
            <div>
                <h2> 자유 게시판 </h2>
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
                            <FreeCard
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

export default FreePage;