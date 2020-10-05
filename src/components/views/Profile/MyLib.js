import React,{Component}from"react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import MyCard from "./MyCard";
import cookie from "react-cookies";

class MyLib extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user_id:cookie.load("user_id"),
            token:cookie.load("token"),
            list:[]
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh() {
        this.state = {
            user_id:cookie.load("user_id"),
            token:cookie.load("token"),
            list:[]
        }
        this.loadLib();
    }

    loadLib = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/user/library?user_id='+cookie.load("user_id"))
            .then(({ data }) => {
                this.setState({
                    user_id:cookie.load("user_id"),
                    list:data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    user_id:cookie.load("user_id"),
                    token:cookie.load("token"),
                    list:[]
                });
            });
    };
    componentDidMount() {
        this.loadLib();
    }
    render(){
        const{}=this.props;
        console.log(this.state.list)
        return(
            <div>
                <h3>내 도서 목록</h3>
                <Paper>
                    <Table>
                        <MyCard stateRefresh={this.stateRefresh} user_id={this.state.user_id}/>
                    </Table>
                </Paper>
            </div>
        );
    }
}
export default MyLib;
