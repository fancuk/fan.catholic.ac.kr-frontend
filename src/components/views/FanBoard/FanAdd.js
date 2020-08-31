import React from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Card} from 'reactstrap';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";
import {BsFillBellFill} from "react-icons/bs";

const FanAdd = () => {
    return (
        <Div>
            <Card body outline color="primary">
            <h1><BsFillBellFill/> 자유게시판 <BsFillBellFill/> </h1>
            <Label for="exampleText"><strong> - 팬이랑 이야기랑 - </strong></Label>
            <Form>
                <FormGroup>
                    <Label for="exampleText">제목</Label>
                    <Input type="text" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText"> 작성자 </Label>
                    <Input type="text" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText"> 내용 </Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">파일 추가</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    </FormText>
                </FormGroup>
                <Link to="./fan">
                    <Button outline color="primary">취소</Button></Link>{' '}
                <Link to="./fan">
                    <Button outline color="primary" type='submit'>글쓰기</Button>
                </Link>
            </Form>
                </Card>
        </Div>
    );
}
const Div = styled.div`
padding:50% auto;
text-align:left;
width:50%;
height:100%;
margin: 10% auto;
`;

export default withRouter(FanAdd);