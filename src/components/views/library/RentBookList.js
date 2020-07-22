import React, { Component } from 'react';
import Book from '../libfunc/Book';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import imgA from '../../logo.png';

const styles = theme => ({
    root: {
        width: "100%",
        minWidth: 1080
    },
    menu: {
        marginTop: 15,
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'center'
    },
    paper: {
        marginLeft: 18,
        marginRight: 18
    },
    progress: {
        margin: theme.spacing.unit * 2
    },
    grow: {
        flexGrow: 1,
    },
    tableHead: {
        fontSize: '1.0rem'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    }
});

class RentBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: '',
            completed: 0,
            searchKeyword: '',
            auth: true,
            anchorEl: null,
            anchorOriginVertical: 'bottom',
            anchorOriginHorizontal: 'right',
            transformOriginVertical: 'top',
            transformOriginHorizontal: 'right',
            anchorReference: 'anchorEl'
        }
    }

    stateRefresh = () => {
        this.setState({
            books: '',
            completed: 0,
            searchKeyword: ''
        });
        this.callApi()
            .then(res => this.setState({books: res}))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 15);
        this.callApi()
            .then(res => this.setState({books: res}))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/library');
        const body = await response.json();
        return body;
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    };

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleChange = (e, checked) => {
        this.setState({ auth: checked });
    };
    handleMenu = (e) => {
        this.setState({ anchorEl: e.currentTarget });
    };
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const filteredComponents = (data) => {
            data = data.filter((c) => {
                return c.title.indexOf(this.state.searchKeyword) > -1;
            });
            return data.map((c) => {
                return <Book stateRefresh={this.stateRefresh} key={c.seqNo} seqNo={c.seqNo} image={c.image} title={c.title} writer={c.writer} renter={c.renter} date={c.DATE} />
            });
        }
        const { classes } = this.props;
        const cellList = ["번호", "교재 이미지", "제목", "저자", "대여자", "대여일"];
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit" className={classes.flex} >
                            <MenuIcon />
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    className={classes.menuButton}
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                    aria-label="Open drawer"
                                >
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={
                                        this.handleClose
                                    }>도서 목록</MenuItem>
                                    <MenuItem onClick={
                                        this.handleClose
                                    }>대여 목록</MenuItem>
                                </Menu>
                            </div>
                        )}
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            <img src={imgA} width='30' height='30' align='center'/> F.A.N 책방
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                name="searchKeyword"
                                value={this.state.searchKeyword}
                                onChange={this.handleValueChange}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
                <div className={classes.menu}>
                    <h3>대여 도서 목록</h3>
                </div>
                <Paper className={classes.paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                {cellList.map(c => {
                                    return <TableCell  align='center' className={classes.tableHead}>{c}</TableCell>
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.books ?
                                filteredComponents(this.state.books) :
                                <TableRow>
                                    <TableCell  colSpan="6" align="center">
                                        <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </Paper>
             </div>
        );
    }
}

export default withStyles(styles)(RentBookList);