import React, {Component} from 'react';
import {Button} from 'reactstrap';
import axios from "axios";

class CheckId extends Component {
    state = {
        user_id:this.props.user_id,
        id:false,
        data:[]

    };
    loadCheck = async () => {
        axios.get('http://fan.catholic.ac.kr:5000/api/check/id?user_id='+this.props.user_id)
            .then(({data}) => {
                this.setState({
                    user_id: this.state.user_id,
                    id: true,
                    data: data,
                });
                console.log(this.state.data)
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    id: false
                });
            })
    }

    componentDidMount() {
        this.loadCheck();
    }

    render() {
        return (
            <Button outline color="primary" type='submit' onClick={this.loadCheck}>중복확인</Button>
        );
    }
}

export default CheckId;