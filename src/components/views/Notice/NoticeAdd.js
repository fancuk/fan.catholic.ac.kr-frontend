import React from 'react';
import {Button, Form, FormGroup, Label, Input, Card} from 'reactstrap';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { AiFillAlert } from "react-icons/ai";
import cookie from "react-cookies";

class NoticeAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            writer:cookie.load("user_id"),
            token:cookie.load("token"),
            board_name: 'noticeBoard',
            title: '',
            content: '',
            add:false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        let url='http://fan.catholic.ac.kr:5000/api/post/add?user_id='+this.state.writer;
        const board = {
            board_name: 'noticeBoard',
            token:cookie.load("token"),
            title: this.state.title,
            writer: this.state.writer,
            content: this.state.content
        }
        const config = {
            headers: {authorization: this.state.token}
        }

        axios.post(url, board,config)
            .then(response => {
                console.log('response : ', JSON.stringify(response))

            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            board_name: 'noticeBoard',
            title: '',
            writer: '',
            content: '',
            add:false
        })
    }

    handleInput = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        const { } = this.props;
        return (
            <Div>
                <Card body outline color="primary">
                    <h1>< AiFillAlert/> 공지사항 <AiFillAlert/></h1>
                    <Label for="StudyAdd"> <strong> - 팬과 함께 공지를! - </strong> </Label>
                    <Form onSubmit={this.handleFormSubmit}>
                        <FormGroup>
                            <Label for="title"> 제목 </Label>
                            <Input type="text" name="title" value={this.state.title} onChange={this.handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="writer"> 작성자 </Label>
                            <Input type="text" name="writer" value={this.state.writer} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="content"> 내용 </Label>
                            <Input type="textarea" name="content" value={this.state.content} onChange={this.handleInput} />
                        </FormGroup>
                        <Link to="./notice">
                            <Button outline color="primary">취소</Button>
                        </Link>{' '}
                        <Button outline color="primary" onClick={this.handleFormSubmit} type='submit'>글쓰기</Button>
                    </Form>
                </Card>
            </Div>

        );
    }
}

const Div = styled.div`
text-align:left;
width:50%;
height:100%;
margin: 10% auto;
`;

export default withRouter(NoticeAdd);