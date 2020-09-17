import React, {Component} from "react";
import FanCard from "./FanCard";
import {Table} from "reactstrap";
import {BsFillBellFill} from "react-icons/bs";

class FanPage extends Component {
    state = {};

    render() {
        const {data} = this.props;
        return (
            <div>
                <h2><BsFillBellFill/> 자유 게시판 <BsFillBellFill/></h2>
                <h6><strong> - 팬이랑 이야기랑 - </strong></h6>
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
                            <FanCard
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

export default FanPage;