import React from "react"
import { Link, withRouter } from "react-router-dom"
import styled from 'styled-components'

function MyPage() {
    return (
        <Div>
            <Link to="/edit">
                <Button>수정</Button>
            </Link>
            <Link to="/rentbook">
                <Button>내도서</Button>
            </Link>
        </Div>
    )

}

const Div = styled.div`
padding:10px;
text-align:center;
`;

const Button = styled.button`
    display:inline-block;
    border-radius:10px;
    border-color:#0080ff;
    margin:10px;
    padding:5px;
    font-weight:600;
    background-color:#afdaff;
   `;

export default withRouter(MyPage)