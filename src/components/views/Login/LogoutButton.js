import React from "react"
import {Link, withRouter} from "react-router-dom"
import {Button} from "reactstrap";

function LogoutButton({ logout, history }) {
    const handleClick = () => {
        logout()
        history.push("/")
    }
    return <>
    <Button outline color="primary" onClick={handleClick}>로그아웃</Button>
        </>
}

export default withRouter(LogoutButton)