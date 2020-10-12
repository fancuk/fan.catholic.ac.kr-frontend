import React from "react";
import cookie from "react-cookies";

const tablespace = {
    lineHeight: "165px"
}

class NoticeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: cookie.load('user_id'),
            token: cookie.load("token")
        }
    }

    render() {
        return (
            <tr>
                <td style={tablespace}>
                    {this.props.board_name}
                </td>

                <td style={tablespace}>
                    {this.props.title}
                </td>
                <td style={tablespace}>
                    {this.props.writer}
                </td>
                <td style={tablespace}>
                    {this.props.content}
                </td>
            </tr>
        );
    }
}

export default NoticeCard;