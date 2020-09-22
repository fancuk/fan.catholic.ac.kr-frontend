import React,{Component}from"react";
import {withStyles} from "@material-ui/core/styles";
import axios from "axios";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import MyCard from "./MyCard";

class MyLib extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user_id:this.props.user_id,
            list:[]
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh() {
        this.state = {
            user_id:this.props.user_id,
            list:[]
        }
        this.loadLib();
    }

    loadLib = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/user/library?user_id='+this.props.user_id)
            .then(({ data }) => {
                this.setState({
                    user_id:this.state.user_id,
                    list:data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    user_id:this.props.user_id,
                    list:[]
                });
            });
    };
    componentDidMount() {
        this.loadLib();
    }
    render(){
        const{classes}=this.props;
        console.log(this.state.user_id);
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
export default withStyles(MyLib);
