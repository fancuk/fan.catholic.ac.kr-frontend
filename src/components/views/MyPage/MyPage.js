import React from "react";

import {withRouter} from "react-router-dom"

function MyPage({ user }) {
    const { id, pwd, name,student_id,grade,semester,phone,email,level} = user || {}
    return (
        <>
            <h1>Mypage</h1>
            <dt>Id</dt>
            <dd>{id}</dd>
            <dt>Pwd</dt>
            <dd>{pwd}</dd>
            <dt>Name</dt>
            <dd>{name}</dd>
            <dt>Student_id</dt>
            <dd>{student_id}</dd>
            <dt>Grade</dt>
            <dd>{grade}</dd>
            <dt>Semester</dt>
            <dd>{semester}</dd>
            <dt>Phone</dt>
            <dd>{phone}</dd>
            <dt>Email</dt>
            <dd>{email}</dd>
            <dt>Level</dt>
            <dd>{level}</dd>
        </>
    )
}

export default withRouter(MyPage);