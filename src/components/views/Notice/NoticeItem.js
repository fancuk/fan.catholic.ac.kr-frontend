import React, { Component } from 'react';
import styled from "styled-components";

class NoticeItem extends Component {
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.brdno);
    }

    render() {
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdtitle}</td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brditem}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
                <td><Button onClick={this.handleRemove}>삭제</Button></td>
            </tr>
        );
    }
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

export default NoticeItem;