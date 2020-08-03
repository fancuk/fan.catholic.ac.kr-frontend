import React, { Component } from "react";
import Bookcard from "./Bookcard";

class Listpage extends Component {
    state = {};

    render() {
        const { Books } = this.props;
        return (
            <ul className="list__itemview">
                {Books &&
                Books.map((book) => {
                    return (
                        <Bookcard
                            image={book.image}
                            title={book.title}
                            writer={book.writer}
                            count={book.count}
                        />
                    );
                })}
            </ul>
        );
    }
}
export default Listpage;
