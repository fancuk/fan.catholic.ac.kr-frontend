import React, { Component } from 'react';
import BookAdd from "../libfunc/BookAdd";
import axios from 'axios';
import RentListPage from "../libfunc/RentListPage";
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import imgA from '../../logo.png';
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

class RentBook extends Component {
    state = {
        loading: false,
        books: []
    };
    loadBook = async () => {
        axios.get('http://fan.catholic.ac.kr:5000/api/library/list')
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
        const { classes } = this.props;
        console.log(this.state.books);
        return (
            <div>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                        F.A.N 책방 - 대여 목록
                    </Typography>
                </Toolbar>
                <BookAdd />
                <RentListPage Books={this.state.books} />
            </div>
        );
    }
}

export default withStyles(styles)(RentBook)
