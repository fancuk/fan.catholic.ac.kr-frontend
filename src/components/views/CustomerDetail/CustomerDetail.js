import React,{Component}from"react";
import {withStyles} from "@material-ui/core/styles";
import axios from "axios";
import CustomerPage from "./CustomerPage";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import "./CustomerDetail.css"

const styles= theme =>({
    root:{
        width:"100%",
        marginTop:theme.spacing.unit*3,
        overflowX:"auto"
    },
    table:{
        minWidth:1080
    },
});

class CustomerDetail extends Component{
    state = {
        loading: false,
        customers:[]
    };
    loadCus = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/user/list')
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    customers: data
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
        this.loadCus();
    }
    render(){
        const{classes}=this.props;
        console.log(this.state.customers);
        return(
            <div>
                <h3 className="member">&nbsp; 회원 관리-관리자 페이지</h3>
                <Paper className = {classes.root}>
                    <Table className = {classes.table}>
                        <CustomerPage Customers={this.state.customers}/>
                    </Table>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles) (CustomerDetail);
