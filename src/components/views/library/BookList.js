import React, { Component } from 'react';
import BookAdd from "../libfunc/BookAdd";
import axios from 'axios';
import Listpage from "../libfunc/Listpage";
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import PaginationButton from '../../PaginationButton';
import BookSearch from "../libfunc/BookSearch";

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

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: 0,
            loading: false,
            books: [],
            page:0,
            currentPage: 1,
            search_place:'',
            search_open:false,
            search_Books: []
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh = (page) => {
        this.setState({
            books: [],
            page: 0,
            completed: 0
        })
        this.loadBook(page);
    }

    loadBook = async (page) => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/library/list?page='+page)
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    books: data[0].books,
                    page: data[1].page
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
        this.loadBook(1);
    }

    pageHandler = page => {
        this.setState({ currentPage: page });
        this.stateRefresh(page)
    }

    render() {
        return (
            <>
                <div>
                    <Listpage Books={this.state.books} rented={false} stateRefresh={this.stateRefresh} />
                </div>
                <BookSearch />
                <PaginationButton
                    page={this.state.page}
                    onClick={this.pageHandler}
                    currentPage={this.state.currentPage}
                    stateRefresh={this.stateRefresh}
                />
            </>
        );
    }
}

export default withStyles(styles)(BookList)
