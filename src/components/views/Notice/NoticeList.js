import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { Link} from "react-router-dom";
import axios from "axios";
import NoticePage from "./NoticePage"
import cookie from "react-cookies";
import styled from "styled-components";

class NoticeList extends Component {
    state = {
        list: false,
        user_id:cookie.load("user_id"),
        token:cookie.load("token"),
        board_name: 'noticeBoard',
        data:[]

    };
    boardList = async () => {
        const config = {
            headers: {authorization: this.state.token}
        }

        await axios.get('http://fan.catholic.ac.kr:5000/api/post/list?board_name=noticeBoard',config)
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
        return (
            <Div>
                <NoticePage Notice={this.state.data}/>
                <Link to="./noticeadd">
                    <Button outline color="primary" type='submit'>글쓰기</Button>
                </Link>
            </Div>
        );

    }
}

const Div = styled.div`
    text-align:center;
    width:60%;
    margin: 10% auto;
    padding:10% auto;
    `;

export default NoticeList;