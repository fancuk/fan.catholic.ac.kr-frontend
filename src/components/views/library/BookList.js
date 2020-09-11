import React, { Component } from 'react';
import BookAdd from "../libfunc/BookAdd";
import axios from 'axios';
import Listpage from "../libfunc/Listpage";
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
        width: "100%",
        minWidth: 1080
    },
    menu: {
        display: 'flex',
        justifyContent: 'center'
    },
    paper: {
        marginTop: 20,
        marginLeft: 18,
        marginRight: 18
    },
    progress: {
        margin: theme.spacing.unit * 2
    },
    title: {

        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
});

const bookadd = {
    position: "fixed",
    top: "100px"
}

class BookList extends Component {
    state = {
        loading: false,
        books: []
    };
    loadBook = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/library/list?page=1')
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    books: data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
        };
    componentDidMount() {
        this.loadBook();
    }

    render() {
        console.log(this.state.books);
        return (
            <div>
                <BookAdd style={bookadd}/>
                <Listpage Books={this.state.books} />
            </div>
        );
    }
}

export default withStyles(styles)(BookList)
