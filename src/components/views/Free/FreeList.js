import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { Link} from "react-router-dom";
import axios from "axios";
import FreePage from "./FreePage"
import cookie from 'react-cookies';

const styles = theme => ({
    root: {
        width: "100%",
        minWidth: 1080
    },
    paper: {
        marginTop: 20,
        marginLeft: 18,
        marginRight: 18
    },
    progress: {
        margin: theme.spacing.unit * 2
    },
    page: {
        display: 'flex',
        justifyContent: 'center'
    }
});


class FreeList extends Component {
    state = {
        list: false,
        board_name: 'freeBoard',
        data:[],
        token:cookie.load('token'),
        user_id:cookie.load('user_id')

    };

    boardList = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/post/list?board_name=freeBoard',{ headers: { Authorization: ` ${cookie.load('token')}` } })
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
        console.log(this.state.data); // 조건부 렌더링으로 주고 받아야함
        return (
            <div>
                <FreePage data={this.state.data}/>
                <Link to="./freeadd">
                    <Button outline color="primary" type='submit'>글쓰기</Button>
                </Link>
            </div>
        );
    }
}

export default FreeList;