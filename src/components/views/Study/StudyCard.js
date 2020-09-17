import React from "react";

function StudyCard({ title, writer, date }) {
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
export default StudyCard;