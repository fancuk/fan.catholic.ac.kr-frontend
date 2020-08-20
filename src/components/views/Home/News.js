import React, {Component} from "react";


class News extends Component {
    render() {
        return(
            <li>
                <span className="thumb">
			    <a href="#"><img src={this.props.img1} alt="" width="204" height="133"/>{this.props.news}</a></span>
            </li>
        );
    }
}
export default (News)