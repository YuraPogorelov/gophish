import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Campaigns = ({ key, name, created_date, results, status }) => {
  const classes = useStyles();
  return (
    <table>
      <thead>
        <tr>
          <td>name</td>
          <td> ... </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> ... </td>
          <td> ... </td>
        </tr>
      </tbody>
    </table>
    // <TableContainer component={Paper}>
    //   <Table className={classes.table} aria-label='simple table'>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Название компании</TableCell>
    //         <TableCell>Дата создания</TableCell>
    //         <TableCell>Carbs&nbsp;(g)</TableCell>
    //         <TableCell>Protein&nbsp;(g)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       <TableRow key={key}>
    //         <TableCell component='th' scope='row'>
    //           {name}
    //         </TableCell>
    //         <TableCell>{created_date}</TableCell>
    //         <TableCell>{results}</TableCell>
    //         <TableCell>{status}</TableCell>
    //       </TableRow>
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
};

export default Campaigns;
