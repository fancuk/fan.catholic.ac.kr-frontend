import React, { Component } from "react";
import Bookcard from "./Bookcard";

class RentListPage extends Component {
    state = {};

    render() {
        const { Books } = this.props;
        console.log(Books);
        console.log(this.props);
        return (
            <ul className="list__itemview">
                {Books &&
                Books.map((book) => {
                    return (
                        <Bookcard
                            Book
                        />
                    );
                })}
            </ul>
        );
    }
}
export default RentListPage;
