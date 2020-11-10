import React, {Component} from 'react';
import axios from 'axios';
import MyLib from "./MyLib";
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
class MyBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            lists: '',
            user_id: cookie.load('user_id'),
            token: cookie.load("token")
        }
        console.log(this.state.user_id)
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh = () => {
        this.setState({
            lists: ''
        })
        this.loadBook();
    }
    loadBook = async () => {
        const config = {
            headers: {authorization: this.state.token}
        }
        axios.get('http://fan.catholic.ac.kr:5000/api/user/library?user_id=' + this.state.user_id, config)
            .then(response => {
                console.log(response)
                this.setState({
                    lists: response.data
                });
                console.log(this.state.lists)
            })
            .catch(e => {
                console.error(e);
            })
    }
    componentDidMount() {
        this.loadBook()
    }
    render() {
        return (
            <>
                <div>
                    <MyLib Lists={this.state.lists} stateRefresh={this.stateRefresh}/>
                </div>
            </>
        );
    }
}
export default MyBook