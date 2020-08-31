import React from 'react';
import {Button, Table} from 'reactstrap';
import { BsFillBellFill } from "react-icons/bs";
import {Link} from "react-router-dom";

const FanList = () => {
    return (
        <div>
            <h2><BsFillBellFill/><b>자유 게시판</b><BsFillBellFill/></h2>
            <h6><strong> - 팬이랑 이야기랑 - </strong></h6>
        <Table hover>
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>날짜</th>
                <th>수정</th>
                <th>삭제</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>게시판 글쓴이 입니다.</td>
                <td>임효진</td>
                <td>20.08.30</td>
                <td><Link to="./fanadd"><Button outline color="primary" >수정</Button></Link></td>
                <td><Button outline color="danger">삭제</Button></td>
            </tr>
            </tbody>
        </Table>
            <Link to="./fanadd">
                <Button outline color="primary" type='submit'>글쓰기</Button>
            </Link>
        </div>
    );
}

export default FanList;