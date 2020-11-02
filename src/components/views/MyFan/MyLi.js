import React, {Component} from "react";
import MyList from "./MyList";
import {Table} from "reactstrap";

const tablestyle = {
    width: "80%",
    margin: "1% auto",
}

class MyLi extends Component {
    state = {};
    render() {
        const { Users } = this.props;
        console.log(Users)
        return (
            <Table style={tablestyle} hover>
                <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>학번</th>
                    <th>학년</th>
                    <th>학기</th>
                    <th>전화번호</th>
                    <th>이메일</th>
                </tr>
                </thead>
                <tbody>
                {Users &&
                Users.map((user) => {
                    return (
                        <MyList
                            user_id={user.user_id}
                            name={user.name}
                            student_id={user.student_id}
                            grade={user.grade}
                            semester={user.semester}
                            phone={user.phone}
                            email={user.email}
                            stateRefresh={this.props.stateRefresh}
                        />
                    );
                })}
                </tbody>
            </Table>
        );
    }
}

export default MyLi;