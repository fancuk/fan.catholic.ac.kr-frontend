import React from "react";
import Rental from "./Rental";
import BookDelete from "./BookDelete";
import BookEdit from "./BookEdit";

function Bookcard({ image, title, writer, count }) {
    return (
            <tr>
                <td>
                    <img width='100' height='130' src={image} alt="" />
                </td>
                <td>
                    {title}
                </td>
                <td>
                    {writer}
                </td>
                <td>
                    {count} 권
                </td>
                <td>
                    <p><Rental image={image} title={title} writer={writer} count={count} /></p>
                    <p><BookEdit image={image} title={title} writer={writer} count={count} /></p>
                    <BookDelete title={title} />
                </td>
            </tr>
    );
}
export default Bookcard;
