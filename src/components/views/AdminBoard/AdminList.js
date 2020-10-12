import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { Link} from "react-router-dom";
import axios from "axios";
import AdminPage from "./AdminPage"
import cookie from 'react-cookies';

class AdminList extends Component {
    state = {
        list: false,
        board_name: 'adminBoard',
        data:[],
        token:cookie.load('token'),
        user_id:cookie.load('user_id')

    };

    boardList = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/post/list?board_name=adminBoard',{ headers: { Authorization: ` ${cookie.load('token')}` } })
            .then(({data}) => {
                this.setState({
                    board_name: 'adminBoard',
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
                <AdminPage data={this.state.data}/>
                <Link to="./adminadd">
                    <Button outline color="primary" type='submit'>글쓰기</Button>
                </Link>
            </div>
        );
    }
}

export default AdminList;