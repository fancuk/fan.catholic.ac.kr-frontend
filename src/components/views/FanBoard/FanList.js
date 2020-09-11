import React from 'react';
import {Button, Table} from 'reactstrap';
import { Link} from "react-router-dom";
import axios from "axios";
import FanAdd from "./FanAdd";
import {BsFillBellFill} from "react-icons/bs";

class NoticeList extends React.Component {
    state = {
        loading: false,
        board_name:''
    };
    boardList = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/board/list')
            .then(({data}) => {
                this.setState({
                    loading: true,
                    board_name: data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };
    componentDidMount() {
        this.boardList();
    }

    render() {
        const {Fan} = this.props;
        return (
            <div>
                <h2><BsFillBellFill/> 자유 게시판 <BsFillBellFill/></h2>
                <h6> <strong> - 팬이랑 이야기랑 - </strong> </h6>
                <Table hover>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>게시판 명</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Fan &&
                    Fan.map((board) => {
                        return (
                            <FanAdd
                                seqNo={board.seqNo}
                                board_name={board.board_name}
                                title={board.title}
                                writer={board.writer}
                            />

                        );
                    })}
                    <td><Link to="./fanadd"><Button outline color="primary" >수정</Button></Link></td>
                    <td><Button outline color="danger">삭제</Button></td>
                    </tbody>
                </Table>
                <Link to="./fanadd">
                    <Button outline color="primary" type='submit'>글쓰기</Button>
                </Link>
            </div>
        );
    }
}

export default NoticeList;