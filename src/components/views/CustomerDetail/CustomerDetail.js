import React,{Component}from"react";
import CustomerDe from "./CustomerDe";
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
        name:"안승현",
        id:"shhb1022",
        grade:"1",
        semester:"1",
        phone:"010-4905-5061",
        email:"shhb1022@naver.com",
        rent:"Y",
        payment: false,
        level:"0"
    },
    {
        student_id:"123456",
        name:"임효진",
        id:"ii123",
        grade:"1",
        semester:"1",
        phone:"010-1234-5678",
        email:"shhb1022@naver.com",
        rent:"N",
        payment: true,
        level:"1"

    },
    {
        student_id:"456789",
        name:"김동건",
        id:"kk123",
        grade:"1",
        semester:"1",
        phone:"010-4567-8901",
        email:"shhb1022@naver.com",
        rent:"N",
        payment: true,
        level:"1"

    }
];
class CustomerDetail extends Component{
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
                                <TableCell align='center'>아이디</TableCell>
                                <TableCell align='center'>학년</TableCell>
                                <TableCell align='center'>학기</TableCell>
                                <TableCell align='center'>전화번호</TableCell>
                                <TableCell align='center'>이메일</TableCell>
                                <TableCell align='center'>도서대출</TableCell>
                                <TableCell align='center'>회원등급</TableCell>
                                <TableCell align='center'>비밀번호</TableCell>
                                <TableCell align='center'>회원삭제</TableCell>
                                <TableCell align='center'>저장</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers.map(c=>{
                                return(
                                    <CustomerDe
                                        stateRefresh={this.stateRefresh}
                                        student_id= {c.student_id}
                                        name={c.name}
                                        id={c.id}
                                        grade={c.grade}
                                        semester={c.semester}
                                        phone={c.phone}
                                        email={c.email}
                                        rent={c.rent}
                                        payment={c.payment}
                                        level={c.level}
                                    > </CustomerDe>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles) (CustomerDetail);
