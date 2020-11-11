import React from 'react';
import {Button, Form, FormGroup, Label, Input, Card} from 'reactstrap';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { AiFillAlert } from "react-icons/ai";
import cookie from "react-cookies";
import {Editor} from "@toast-ui/react-editor";

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
            title: this.state.title,
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
                        <Editor
                            previewStyle="vertical"
                            height="300px"
                            initialEditType="wysiwyg"
                            placeholder="글쓰기"
                            ref={this.editorRef}
                        />
                        <Button outline color="primary" onClick={this.handleFormSubmit} type='submit'>저장</Button>
                        <Link to="./free">
                            <Button outline color="primary">취소</Button>
                        </Link>{' '}
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