import React, { Component } from 'react';
import axios from 'axios';
import Listpage from "./Listpage";
import '../library/style.css';
import { withStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from "@material-ui/core/DialogContent";
import cookie from "react-cookies";

const styles = theme => ({

});

class BookSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: 0,
            loading: false,
            title: '',
            books: [],
            search_place:'',
            search_open:false,
            search_Books: [],
            user_id: cookie.load('user_id')
        }
    }

    searchBook = (title) => {
        axios.get('http://fan.catholic.ac.kr:5000/api/user/library?user_id='+this.state.user_id)
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    books: data,
                });
                console.log(this.state.books)
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };
    handleChange = (e) => {
        this.setState({
            search_place: e.target.value
        })
        console.log(this.state.search_place)
    }

    handleSubmit = (e) => {
        if(!this.state.search_place){
            alert('ID를 입력해주세요')
            return
        }
        this.setState({
            search_open: true
        })
        console.log(this.state.search_open)

        e.preventDefault();
        this.searchBook(this.state.search_place)
    }

    handleClose = () => {
        this.setState({
            search_open: false,
            search_place: ''
        })
        console.log(this.state.search_open)
    }

    render() {
        return (
            <>
                <div>
                    <input
                        placeholder="search"
                        value={this.state.search_place}
                        onChange={this.handleChange}
                    />
                    <IconButton aria-label="search" color="inherit">
                        <SearchIcon onClick={this.handleSubmit}/>
                    </IconButton>
                </div>
                <Dialog open={this.state.search_open} onClose={this.handleClose}>
                    <DialogContent>
                        <Listpage Books={this.state.books}/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default withStyles(styles)(BookSearch)
