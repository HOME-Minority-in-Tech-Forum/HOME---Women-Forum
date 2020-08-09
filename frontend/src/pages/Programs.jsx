import React, { Fragment } from "react";
import {
  makeStyles,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import PageTitle from "../components/PageTitle";
import DashboardRow from "../components/DashboardRow";
const mockData = require("../data.json");

const useStyles = makeStyles((theme) => ({
  flexBox: {
    display: "flex",
  },
  flexBoxCenter: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    background: "linear-gradient(45deg, #D8F6FE 30%, #FFEBFA 90%)",
  },
  tableHeader: {
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
}));

const Programs = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <main>
        <Container maxWidth="lg">
          <PageTitle pageTitle="PROGRAMS" />
          {/* Search Bars */}
          <Grid container>
            <Grid item xs={12} sm={6} className="flexBox">
              <Grid container>
                <Grid item xs={4}>
                  <Typography display="inline" variant="h6">
                    Search By Company:{" "}
                  </Typography>
                </Grid>
                <Grid item xs={8} align="center">
                  <Autocomplete
                    id="combo-box-demo"
                    options={mockData}
                    getOptionLabel={(option) => option.companyName}
                    style={{ width: "70%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Company Name"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} className="flexBox">
              <Grid container>
                <Grid item xs={4}>
                  <Typography display="inline" variant="h6">
                    Filter By Type:{" "}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={mockData}
                    getOptionLabel={(option) => option.companyName}
                    style={{ width: "70%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Type" variant="outlined" />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Dash Board */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeader}>
                      Company{" "}
                    </TableCell>

                    <TableCell className={classes.tableHeader}>
                      Program Name
                    </TableCell>
                    <TableCell className={classes.tableHeader}>
                      Location
                    </TableCell>
                    <TableCell className={classes.tableHeader}>
                      Description
                    </TableCell>
                    <TableCell className={classes.tableHeader}>Link</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockData.map((company) => (
                    <DashboardRow
                      name={company.companyName}
                      supportingPrograms={company.supportingPrograms}
                    />
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Container>
      </main>
    </Fragment>
  );
};

export default Programs;
