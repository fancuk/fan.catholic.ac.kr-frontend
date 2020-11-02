import React from "react";
import cookie from "react-cookies";
const tablestyle = {
    lineHeight: "189px"
}
class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id:cookie.load('user_id'),
            token:cookie.load("token")
        }
    }
    render() {
        console.log("확인")
        return (
            <tr>
                <td style={tablestyle}>
                    {this.props.user_id}
                </td >
                <td style={tablestyle}>
                    {this.props.name}
                </td>
                <td style={tablestyle}>
                    {this.props.student_id}
                </td>
                <td style={tablestyle}>
                    {this.props.grade}
                </td>
                <td style={tablestyle}>
                    {this.props.semester}
                </td>
                <td style={tablestyle}>
                    {this.props.phone}
                </td>
                <td style={tablestyle}>
                    {this.props.email}
                </td>
            </tr>
        );
    }
}
export default MyList;