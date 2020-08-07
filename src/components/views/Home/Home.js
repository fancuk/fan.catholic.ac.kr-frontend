import React from "react"
import { Link, withRouter } from "react-router-dom"
import logo from '../../logo.png';
import styled from 'styled-components'

function Home() {
    return (
        <Div>
            <img src={logo}
                className="Login-logo"
                alt="logo"
                hspace="50"
                align="center"
                width="60px"
                height="60px"
            />
        </Div >

    )

}

const Div = styled.div`
padding:10px;
text-align:center;
`;
export default withRouter(Home)