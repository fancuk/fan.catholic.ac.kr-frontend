import React, {Component} from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {Card} from 'reactstrap';
import cookie from 'react-cookies'
import axios from "axios";
import MyBook from "../MyBook/MyBook";
import MyEdit from "./MyEdit";
import MyDelete from "./MyDelete";

class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: cookie.load("user_id"),
            token: cookie.load("token"),
            level:cookie.load('level'),
            login:cookie.load('login'),
            user: []
        };
    }

    MyFan = async () => {
        const config = {
            headers: {Authorization: this.state.token}
        }
        await axios.get('http://fan.catholic.ac.kr:5000/api/profile/info?user_id='+this.state.user_id, config)
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
            .catch((e) => {
                console.error(e);
            })
    }

    componentDidMount() {
        this.MyFan()
    }

    render() {
        console.log(this.state.user)
        return (
            <Div>
                {this.state.login !== "True" ?
                    <h3>페이지 접근 권한이 없습니다. 로그인 해주세요!<br/>
                    <a href="./login">로그인</a>
                    </h3>
                    :
                    <>
                        <Card body outline color="primary">
                            <h1>My Page - HOME</h1>
                            <h3>Free meeting Active studying Nice ending</h3>
                            <ul>
                                <li><strong>안녕하세요 FAN 홈페이지 입니다 !</strong></li>
                                <li><strong>책 대여 기한은 1학기 입니다. 공부 하시고 나서 반납 부탁드립니다.</strong></li>
                            </ul>
                            <MyBook user={this.state.user}/><br/>
                            <p><MyEdit user={this.state.user}/>{' '}<MyDelete user={this.state.user}/></p>
                        </Card>
                    </>
                }
            </Div>

        );
    }
}

const Div = styled.div`
    width:50%;
    margin: auto;
    `;

export default withRouter(MyPage);