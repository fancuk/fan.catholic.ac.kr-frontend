import React, {Component} from 'react';
import {Button} from 'reactstrap';
import axios from "axios";
import cookie from 'react-cookies'

class Logout extends Component {
    state = {
        user_id:this.props.user_id,
        logout:false,
        data:[],

    };
    logout = async () => {
        axios.get('http://fan.catholic.ac.kr:5000/api/logout?user_id='+this.props.user_id)
            .then(({data}) => {
                this.setState({
                    user_id: this.state.user_id,
                    data: data,
                });
                console.log(this.state.data)
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    logout: false
                });
            })
        cookie.remove(this.state.user_id,{path:'/'});
        /** Clear all cookies starting with 'session' (to get all cookies, omit regex argument) */
        Object.keys(cookie.select(/^session.*/i)).forEach(user_id => cookie.remove(user_id, { path: '/' }))
    }

    componentDidMount() {
        this.logout();
    }

    render() {
        return (
            <Button outline color="primary" type='submit' onClick={this.logout}>로그아웃</Button>
        );
    }
}

export default Logout;