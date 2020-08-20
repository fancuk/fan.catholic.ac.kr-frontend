import React, {Component} from "react";


class slider_list extends Component {
    render() {
        return(
            <li>
                <div>
                    <h3>{this.props.name}</h3>
                </div>
                <img src = {this.props.img} width="1002" height="316" alt=""/>
            </li>
        );
    }
}
export default (slider_list)