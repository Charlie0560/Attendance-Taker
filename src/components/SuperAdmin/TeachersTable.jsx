import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

export default function TeachersTable({teachers}) {
    const handleDelete = async(id)=>{
        try{
            await axios.delete(`/teacher/delete/${id}`);
            window.alert("Teacher Deleted Successfully");
        }
        catch(err){
            console.log(err);
            window.alert(err);
        }
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Department</TableCell>
            {/* <TableCell align="right">Password</TableCell> */}
            <TableCell align="right">Unique ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((row) => (
            <TableRow
            //   key={row.fullname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullname}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              {/* <TableCell align="right">{row.password}</TableCell> */}
              <TableCell align="right">{row.uniqueID}</TableCell>
              <TableCell align="right"><button onClick={()=>handleDelete(row._id)} style={{backgroundColor: 'gray', color: 'white' , cursor: 'pointer'}}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
