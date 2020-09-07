import React from 'react';
import {Button, Form, FormGroup, Label, Input, Card} from 'reactstrap';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";
import { AiFillAlert } from "react-icons/ai";
import axios from 'axios';

class NoticeAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board_name: '',
            title: '',
            writer: '',
            content: '',
            list:false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        let url='http://fan.catholic.ac.kr:5000/api/board/add';
        const board = {
            board_name: this.state.board_name,
            title: this.state.title,
            writer: this.state.writer,
            content: this.state.content
        }
        axios.post(url, board)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            board_name: '',
            title: '',
            writer: '',
            content: '',
            list:false
        })
    }

    handleInput = (e) => {
        let success = {};
        success[e.target.name] = e.target.value;
        this.setState(success);
    }

    render() {
        const {Board} = this.props;
        return (
            <Div>
                <Card body outline color="primary">
                    <h1><AiFillAlert/>공지사항 게시판 글쓰기<AiFillAlert/></h1>
                    <Label for="NoticeAdd"> <strong> - 팬이랑 공지랑 - </strong> </Label>
                    <Form onSubmit={this.handleFormSubmit}>
                        <FormGroup>
                            <Label for="board_name"> 게시판명 </Label>
                            <Input type="text" name="board_name" value={this.state.board_name} onChange={this.handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title"> 제목 </Label>
                            <Input type="text" name="title" value={this.state.title} onChange={this.handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="writer"> 작성자 </Label>
                            <Input type="text" name="writer" value={this.state.writer} onChange={this.handleInput} />
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