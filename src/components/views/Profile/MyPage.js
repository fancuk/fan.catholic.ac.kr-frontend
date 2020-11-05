import React, {Component} from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {Card} from 'reactstrap';
import {BsFillHouseFill} from "react-icons/bs";
import MyDelete from "./MyDelete";
import MyEdit from "./MyEdit";
import cookie from 'react-cookies'
import axios from "axios";
import MyBook from "../MyBook/MyBook";

class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: cookie.load("user_id"),
            token: cookie.load("token"),
            level:cookie.load('level'),
            user: []
        };
    }

    MyFan = async () => {
        const config = {
            headers: {Authorization: this.state.token}
        }
        console.log(config)
        console.log(this.state.user_id)
        await axios.get('http://fan.catholic.ac.kr:5000/api/profile/info?user_id='+this.state.user_id, config)
            .then(response => {
                console.log(response)
                console.log(response.data)
                this.setState({
                    user: response.data
                })
                console.log(this.state.user)
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
                {this.state.login !== 'true' ?
                    <a href="login">로그인</a> :
                    <>
                        <Card body outline color="primary">
                            <h1><BsFillHouseFill/>My Page - HOME<BsFillHouseFill/></h1>
                            <h3>Free meeting Active studying Nice ending</h3>
                            <ul>
                                <li><strong>안녕하세요 FAN 홈페이지 입니다 !</strong></li>
                                <li><strong>책 대여 기한은 1학기 입니다. 공부 하시고 나서 반납 부탁드립니다.</strong></li>
                            </ul>
                            <MyBook user={this.state.user}/>
                            <p><MyEdit user={this.state.user}/>{' '}<MyDelete/></p>
                        </Card>
                    </>
                }
            </Div>

        );
    }
}

const Div = styled.div`
    text-align:left;
    width:45%;
    margin: 10% auto;
    `;
export default withRouter(MyPage);