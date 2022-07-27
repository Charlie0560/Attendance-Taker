import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// function createData(sname,tname, lecno, Date, Excel, PDF) {
//   return {sname, tname, lecno, Date, Excel, PDF };
// }

// const rows = [
//   createData(
//     "Fundamentals of Java Programming",
//     "Upasani",
//     6,
//     " 24/07/2022",
//     "Download",
//     "Download"
//   ),
//   createData(
//     "Fundamentals of Java Programming",
//     "Upasani",
//     6,
//     " 24/07/2022",
//     "Download",
//     "Download"
//   ),
//   createData(
//     "Fundamentals of Java Programming",
//     "Upasani",
//     6,
//     " 24/07/2022",
//     "Download",
//     "Download"
//   ),
//   createData(
//     "Fundamentals of Java Programming",
//     "Upasani",
//     6,
//     " 24/07/2022",
//     "Download",
//     "Download"
//   ),
// ];

function BasicTable({ attenddata }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Subject Name</TableCell>
            <TableCell align="right">Teacher Name</TableCell>
            <TableCell align="right">Lecture No.</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">Div</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Excel</TableCell>
            {/* <TableCell align="right">PDF</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {attenddata.map((row) => (
            
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.subject}
              </TableCell>
              <TableCell align="right">{row.teacher}</TableCell>
              <TableCell align="right">{row.lectureno}</TableCell>
              <TableCell align="right">{row.generatedcode}</TableCell>
              <TableCell align="right">{row.div}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right"><button>Download</button></TableCell>
              {/* <TableCell align="right"><button>Download</button></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
