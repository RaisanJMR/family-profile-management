import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useContext } from 'react';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import FamilyContext from '../context/FamilyContext';

export default function Details() {
    const { members, deleteFamilyMember, getFamilyMembers } = useContext(FamilyContext)
   

    useEffect(() => {
        getFamilyMembers()
        // eslint-disable-next-line
    }, [])



    return (
        <TableContainer sx={{ minHeight: "500px" }} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell align="right">age</TableCell>
                        <TableCell align="right">phone</TableCell>
                        <TableCell align="right">action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.length > 0 && members?.map((member) => (
                        <TableRow
                            key={member.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {member.name}
                            </TableCell>
                            <TableCell align="right">{member.age}</TableCell>
                            <TableCell align="right">{member.phone}</TableCell>
                            <TableCell align="right"><Button onClick={() => deleteFamilyMember(member.id)} variant="outlined" color="error">
                                <ClearIcon />    Delete
                            </Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}