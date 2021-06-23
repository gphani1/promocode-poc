import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { green,red } from '@material-ui/core/colors';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PromoCodeTable(props) {
  const {promoCodeDetails  } = props;
  const classes = useStyles();

  return (
   <TableContainer component= {Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Free Delivery</TableCell>
            <TableCell align="right">Discount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {promoCodeDetails.map((row,index) => (
            <TableRow key={row.code}>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.delivery ? <CheckIcon style={{ color: green[500] }}/> : <ClearIcon
                style={{ color: red[500] }}/>}</TableCell>
              <TableCell align="right">{row.discount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
    
  );
}

