import React, {Component} from"react";
import Button from '@material-ui/core/Button';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";



class CustomerLi extends Component{
    state = {
        loading: false,
        customers: []
    };
    loadCustomer = async () => {
        axios.get('http://fan.catholic.ac.kr:5000/member')
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
        this.loadCustomer();
    }
    render(){
        return(
            <TableRow>
                <TableCell align ='center'> {this.props.student_id}</TableCell>
                <TableCell align='center'>{this.props.name}</TableCell>
                <TableCell align='center'><Button variant="contained" color= "primary" >수정</Button></TableCell>
            </TableRow>
        );
    }
}

export default CustomerLi;
