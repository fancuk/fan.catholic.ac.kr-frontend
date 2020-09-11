import React from 'react';
import {Button, Table} from 'reactstrap';
import { RiPencilLine } from "react-icons/ri";
import { Link} from "react-router-dom";
import axios from "axios";
import StudyAdd from "./StudyAdd";

class StudyList extends React.Component {
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
       const {Study} = this.props;
    return (
        <div>
        <h2><RiPencilLine/> 스터디 게시판 <RiPencilLine/></h2>
            <h6> <strong> - 팬이랑 공부랑 - </strong> </h6>
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
                {Study &&
                Study.map((board) => {
                    return (
                        <StudyAdd
                            seqNo={board.seqNo}
                            board_name={board.board_name}
                            title={board.title}
                            writer={board.writer}
                        />

                    );
                })}
                <td><Link to="./studyadd"><Button outline color="primary" >수정</Button></Link></td>
                <td><Button outline color="danger">삭제</Button></td>
            </tbody>
        </Table>
            <Link to="./studyadd">
            <Button outline color="primary" type='submit'>글쓰기</Button>
            </Link>
        </div>
        );
    }
}

export default StudyList;