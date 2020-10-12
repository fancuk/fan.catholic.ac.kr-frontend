import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { Link} from "react-router-dom";
import axios from "axios";
import StudyPage from "./StudyPage"
import cookie from "react-cookies";

class StudyList extends Component {
    state = {
        list: false,
        user_id:cookie.load("user_id"),
        token:cookie.load("token"),
        board_name: 'studyBoard',
        data:[]

    };
    boardList = async () => {
        const config = {
            headers: {authorization: this.state.token}
        }

        await axios.get('http://fan.catholic.ac.kr:5000/api/post/list?board_name=studyBoard',config)
            .then(({data}) => {
                this.setState({
                    board_name: 'studyBoard',
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
                <StudyPage Study={this.state.data}/>
                <Link to="./studyadd">
                    <Button outline color="primary" type='submit'>글쓰기</Button>
                </Link>
            </div>
        );
    }
}

export default StudyList;