import React, {Component} from 'react';
import axios from 'axios';
import MyLi from "./MyLi";
import {withStyles} from '@material-ui/core/styles';
import cookie from "react-cookies";
const styles = theme => ({
    root: {
        width: "100%",
        minWidth: 1080
    },
    paper: {
        marginTop: 20,
        marginLeft: 18,
        marginRight: 18
    },
    progress: {
        margin: theme.spacing.unit * 2
    },
    page: {
        display: 'flex',
        justifyContent: 'center'
    }
});
class MyFan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
            user_id: cookie.load('user_id'),
            token: cookie.load("token")
        }
        console.log(this.state.user_id)
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh = () => {
        this.setState({
            users: []
        })
        this.loadFan();
    }
    loadFan = async () => {
        const config = {
            headers: {authorization: this.state.token}
        }
        axios.get('http://fan.catholic.ac.kr:5000/api/profile/info?user_id='+this.state.user_id, config)
            .then(response => {
                console.log(response)
                this.setState({
                    users: response.data
                });
                console.log(this.state.users)
            })
            .catch(e => {
                console.error(e);
            })
    }
    componentDidMount() {
        this.loadFan()
    }
    render() {
        return (
            <>
                <div>
                    {this.state.users && <MyLi Users={this.state.users} stateRefresh={this.stateRefresh}/>}
                </div>
            </>
        );
    }
}
export default withStyles(styles)(MyFan)