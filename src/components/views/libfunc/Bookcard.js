import React from "react";
import Rental from "./Rental";
import BookDelete from "./BookDelete";
import BookEdit from "./BookEdit";
import { Table } from "reactstrap";

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
                    <Rental image={image} title={title} writer={writer} count={count} />
                    <BookEdit image={image} title={title} writer={writer} count={count} />
                    <BookDelete title={title} />
                </td>
                {/*<p>
                    도서명 : <span className="text--brand"></span>
                </p>
                <p>저자 : </p>
                <p>남은 도서 : </p>*/}

            </tr>
    );
}
export default Bookcard;
