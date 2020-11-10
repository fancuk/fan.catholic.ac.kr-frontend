import React from "react";

function NoticeCard({ title, writer, date }) {
    return (
        <tr>
            <td>
                {title}
            </td>
            <td>
                {writer}
            </td>
            <td>
                {date}
            </td>
        </tr>
    );
}
export default NoticeCard;