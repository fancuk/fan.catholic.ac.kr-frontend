import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { Link} from "react-router-dom";
import axios from "axios";
import NoticePage from "./NoticePage"

class NoticeList extends Component {
    state = {
        list: false,
        board_name: 'noticeBoard',
        data:[]

    };
    boardList = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/board/list?board_name=noticeBoard')
            .then(({data}) => {
                this.setState({
                    board_name: 'noticeBoard',
                    list: true,
                    data:data
                });
                console.log(this.state.data)
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    list: false
                });
            });
    };

    componentDidMount() {
        this.boardList();
    }

    render() {
        console.log(this.state.data); // 조건부 렌더링으로 주고 받아야함
        return (
            <div>
                <NoticePage data={this.state.data}/>
                <Link to="./noticeadd">
                    <Button outline color="primary" type='submit'>글쓰기</Button>
                </Link>
            </div>
        );
    }
}

export default NoticeList;