import React from "react";
import cookie from "react-cookies";
import BookReturn from "../libfunc/BookReturn";
const tablestyle = {
    lineHeight: "189px"
}
class MyRent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id:cookie.load('user_id'),
            token:cookie.load("token")
        }
    }
    render() {
        return (
            <tr>
                <td style={tablestyle}>
                    <img width='130' height='165' src={this.props.image} alt=""/>
                </td>
                <td style={tablestyle}>
                    {this.props.title}
                </td >
                <td style={tablestyle}>
                    {this.props.writer}
                </td>
                <td style={tablestyle}>
                    <BookReturn image={this.props.image} title={this.props.title} stateRefresh = {this.props.stateRefresh}/>
                </td>
            </tr>
        );
    }
}

export default MyRent;