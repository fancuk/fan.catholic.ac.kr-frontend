import React,{Component}from"react";
import CustomerDe from "./CustomerDe";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


class CustomerPage extends Component {
    state = {};

    render() {
        const { Customers } = this.props;
        return (
            <div>
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
                        <TableCell align='center'>수정</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Customers&&
                    Customers.map(c=>{
                        return(
                            <CustomerDe
                                stateRefresh={this.stateRefresh}
                                student_id= {c.student_id}
                                name={c.name}
                                user_id={c.user_id}
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
            </div>


        );
    }
}
export default CustomerPage;
