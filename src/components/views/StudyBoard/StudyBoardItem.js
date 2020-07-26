import React, { Component } from 'react';

class StudyBoardItem extends Component {
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.brdno);
    }

    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }

    render() {
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td><a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brditem}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
                <td onClick={this.handleRemove}>삭제</td>
            </tr>
        );
    }
}

export default StudyBoardItem;