import React from 'react';
import {Button, Form, FormGroup, Label, Input, Card} from 'reactstrap';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";
import {RiPencilLine} from "react-icons/ri";
import axios from 'axios';

class StudyAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seqNo:null,
            board_name: '',
            title: '',
            writer: '',
            content: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        let url='http://fan.catholic.ac.kr:5000/api/board/add';
        const Study = {
            seqNo:Number(this.state.seqNo),
            board_name: this.state.board_name,
            title: this.state.title,
            writer: this.state.writer,
            content: this.state.content
        }
        axios.post(url, Study)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
                document.location.href="./study";
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            seqNo:null,
            board_name: '',
            title: '',
            writer: '',
            content: ''
        })
    }

    handleInput = (e) => {
        let success = {};
        success[e.target.name] = e.target.value;
        this.setState(success);
    }

    render() {
        const {Study} = this.props;
        return (
            <Div>
                <Card body outline color="primary">
                    <h1><RiPencilLine/>스터디 게시판 글쓰기<RiPencilLine/></h1>
                    <Label for="StudyAdd"> <strong> - 팬이랑 공부랑 - </strong> </Label>
                    <Form onSubmit={this.handleFormSubmit}>
                        <FormGroup>
                            <Label for="seqNo"> 번호 </Label>
                            <Input type="text" name="seqNo" value={this.state.seqNo} onChange={this.handleInput} />
                        </FormGroup>
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
                        <Link to="./study">
                            <Button outline color="primary">취소</Button></Link>{' '}
                            <Button outline color="primary" type='submit'>글쓰기</Button>
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

export default withRouter(StudyAdd);