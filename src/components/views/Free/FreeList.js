import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { Link} from "react-router-dom";
import axios from "axios";
import FreePage from "./FreePage"
import cookie from "react-cookies";

class FreeList extends Component {
    state = {
        list: false,
        user_id:cookie.load("user_id"),
        token:cookie.load("token"),
        board_name: 'freeBoard',
        data:[]

    };
    boardList = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/post/list?board_name=freeBoard')
            .then(({data}) => {
                this.setState({
                    board_name: 'freeBoard',
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
        console.log(this.state.data);
        return (
            <div>
                <FreePage Free={this.state.data}/>
                <Link to="./freeadd">
                    <Button outline color="primary" type='submit'>글쓰기</Button>
                </Link>
            </div>
        );
    }
}

export default FreeList;