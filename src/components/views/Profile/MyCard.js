import React from "react";

class MyCard extends React.Component {
    render() {
        return (
                <tr>
                    <td>
                        {this.props.user_id}
                    </td>
                </tr>
        );
    }
}

export default MyCard;
