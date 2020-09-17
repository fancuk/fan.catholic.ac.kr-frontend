import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
import 'url-search-params-polyfill';
import {Card, Form, FormGroup, Input, Label} from "reactstrap";
import {RiPencilLine} from "react-icons/ri";
import {Link} from "react-router-dom";
import styled from "styled-components";

class StudyEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board_name:'studyBoard',
            title: this.props.title,
            writer: this.props.writer,
            date: this.props.date,
            content:this.props.content,
            edit: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        let url = 'http://fan.catholic.ac.kr:5000/api/library/edit';
        const board = {
            board_name:'studyBoard',
            title: this.state.title,
            writer: this.state.writer,
            date: this.state.date,
            edit_title: this.state.title,
            edit_content: this.state.content,
            edit:false
        }
        axios.put(url, board)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            board_name:'studyBoard',
            title: this.state.title,
            writer: this.state.writer,
            date: this.state.date,
            content: this.state.content,
            edit:false
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        const { } = this.props;
        return (
            <Div>
                <Card body outline color="primary">
                    <h1><RiPencilLine/> 스터디 게시판 글쓰기<RiPencilLine/></h1>
                    <Label for="StudyAdd"> <strong> - 팬이랑 공부랑 - </strong> </Label>
                    <Form onSubmit={this.handleFormSubmit}>
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

export default withStyles(StudyEdit);