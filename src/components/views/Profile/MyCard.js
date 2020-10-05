import React from "react";
import cookie from 'react-cookies'

class MyCard extends React.Component {
    render() {
        return (
                <tr>
                    <td>
                        {cookie.load("user_id")}
                    </td>
                </tr>
        );
    }
}


export default MyCard;
