import React from "react";
import Rental from "./Rental";
import BookDelete from "./BookDelete";

function Bookcard({ image, title, writer, count }) {
    return (
        <li className="component component--item_card">
            <img width='100' height='130' src={image} className="image--itemcard" alt="" />
            <p>
                도서명 : <span className="text--brand">{title}</span>
            </p>
            <p>저자 : {writer}</p>
            <p>남은 도서 : {count} 권</p>
            <Rental image={image} title={title} writer={writer} count={count}/>
            <BookDelete title={title} />
        </li>
    );
}
export default Bookcard;
