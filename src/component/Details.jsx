import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export default function Details() {
    const [users, setMembers] = useState([])

    useEffect(() => {

        const existingMembers = JSON.parse(localStorage.getItem("members")) || [];
        setMembers(existingMembers)
    }, [])

    const deleteMember = (memberId) => {
        const existingMembers = JSON.parse(localStorage.getItem("members")) || [];
        const updatedMembers = existingMembers.filter(member => member.id !== memberId);
        localStorage.setItem("members", JSON.stringify(updatedMembers));
    }

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
                    {users.length > 0 && users?.map((mem) => (
                        <TableRow
                            key={mem.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {mem.name}
                            </TableCell>
                            <TableCell align="right">{mem.age}</TableCell>
                            <TableCell align="right">{mem.phone}</TableCell>
                            <TableCell align="right"><Button onClick={() => deleteMember(mem.id)} variant="outlined" color="error">
                                <ClearIcon />    Delete
                            </Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}