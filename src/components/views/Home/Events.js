import React, {Component} from "react";

class Events extends Component {
    render() {
        return(
            <>
                <ul>
                    <li><span className="thumb" >
                            <a href="#"><img src={this.props.img} alt="" width="204" height="133"/></a>
                        </span> {this.props.title}
                    </li>
                </ul>
            </>
        );

    }
}
export default (Events);