import React from "react";
import Rental from "./Rental";
import BookDelete from "./BookDelete";
import BookEdit from "./BookEdit";
import cookie from "react-cookies";
const tablestyle = {
    lineHeight: "165px"
}
const tableButtonStyle ={
    marginTop:"14.25px"
}


class Bookcard extends React.Component {
    constructor() {
        super();
        this.state = {
            user_id:cookie.load('user_id')
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
                {this.props.rented?'':<td style={tablestyle}>
                    {this.props.count} 권
                </td>}
                <td>
                    {this.state.user_id!=='fancuk'?
                        <div style={tableButtonStyle}>
                            <Rental image={this.props.image} title={this.props.title} writer={this.props.writer} count={this.props.count} stateRefresh={this.props.stateRefresh}/>
                        </div>:
                        <>
                            <div style={tableButtonStyle}>
                        <BookEdit image={this.props.image} title={this.props.title} writer={this.props.writer} count={this.props.count} stateRefresh={this.props.stateRefresh}/>
                    </div>
                        <div style={tableButtonStyle}>
                        <BookDelete title={this.props.title} stateRefresh={this.props.stateRefresh}/>
                        </div>
                        </>
                    }


                </td>
            </tr>
        );
    }
}
export default Bookcard;
