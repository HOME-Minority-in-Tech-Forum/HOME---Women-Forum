import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const mockData = require("../data.json");

const DashboardRow = (props) => {
  return props.supportingPrograms.map((program) => (
    <TableRow key={props.name + Math.random()}>
      <TableCell>{props.name}</TableCell>
      <TableCell>{program.programName}</TableCell>
      <TableCell>{program.location}</TableCell>
      <TableCell>{program.description}</TableCell>
      <TableCell>{program.programLink}</TableCell>
    </TableRow>
  ));
};

export default DashboardRow;
