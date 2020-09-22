import React, {Component} from "react";


class Slide_list extends Component {
    render() {
        console.log(this.props.img)
        return(
            <div>
                <li>
                    <img src = {this.props.img}  alt=""/>
                </li>
            </div>
        );

    }
}
export default Slide_list;