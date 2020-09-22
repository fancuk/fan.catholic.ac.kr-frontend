import React, {Component} from "react";


class StudyList extends Component {
    render() {
        return(
            <>
                <ul>
                    <li>
                        <a href="#">{this.props.content}</a>
                        <span>{this.props.date}</span>
                    </li>
                </ul>
            </>

        );

    }
}
export default (StudyList);