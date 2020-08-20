import React from "react"
import { Link, withRouter } from "react-router-dom"
import styled from 'styled-components'
// 내도서 버튼을 제거 하고 + 도서목록을 뽑아 올 수 있도록 한다 + 양이 많으면 버튼을 위로 올린다

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