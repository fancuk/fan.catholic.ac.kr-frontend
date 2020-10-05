import React from "react";

function AdminCard({ title, writer, date }) {
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
export default AdminCard;