import React,{Component}from"react";
import CustomerLi from "./CustomerLi";
import "./CustomerList.css"
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {withStyles} from "@material-ui/core/styles";
import Paper from"@material-ui/core/Paper";
const styles= theme =>({
    root:{
        width:"100%",
        marginTop:theme.spacing.unit*3,
        overflowX:"auto"
    },
    table:{
        minWidth:1080
    }
});

const customers =[
    {
        student_id:"202021224",
        name:"안승현"
    },
    {
        student_id:"123456",
        name:"임효진"
    },
    {
        student_id:"456789",
        name:"김동건"
    }
];
class CustomerList extends Component{
    render(){
        const{classes}=this.props;
        return(
            <div>
                <h3 className='member'>회원 관리</h3>
                <Paper className = {classes.root}>
                    <Table className = {classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>학번</TableCell>
                                <TableCell align='center'>이름</TableCell>
                                <TableCell align='center'>수정</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers.map(c=>{
                                return(
                                    <CustomerLi
                                        student_id= {c.student_id}
                                        name={c.name}
                                    > </CustomerLi>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>

        );
    }
}

export default withStyles(styles) (CustomerList);
