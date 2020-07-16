import React from "react"
import { withRouter } from "react-router-dom"
import styled from "styled-components";

function LogoutButton({ logout, history }) {
    const handleClick = () => {
        logout()
        history.push("/")
    }
    return <Button onClick={handleClick}>Logout</Button>
}
const Button =styled.button`
    display:inline-block;
    border-radius:10px;
    border-color:#0080ff;
    margin:10px;
    padding:5px;
    font-weight:600;
    background-color:#afdaff;
   `;

export default withRouter(LogoutButton)