import React, {Component} from 'react';
import styled from 'styled-components';
import {Link, withRouter} from "react-router-dom";
import {Card} from 'reactstrap';
import {BsFillHouseFill} from "react-icons/bs";
import MyList from "./MyList";
import MyDelete from "./MyDelete";
import MyEdit from "./MyEdit";


class MyPage extends Component {
    render() {
        const {Users} = this.props;
        return (
            <Div>
                <Card body outline color="primary">
                    <h1><BsFillHouseFill/>My Page - HOME<BsFillHouseFill/></h1>
                    <h3>Free meeting Active studying Nice ending</h3>
                    <ul>
                        <li><strong>안녕하세요 FAN 홈페이지 입니다 !</strong></li>
                        <li><strong>책 대여 기한은 1학기 입니다. 공부 하시고 나서 반납 부탁드립니다.</strong></li>
                    </ul>
                    <MyList user_id={this.props.user_id} stateRefresh={this.stateRefresh}/>
                    <p><MyEdit/>{' '}<MyDelete/></p>
                </Card>
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