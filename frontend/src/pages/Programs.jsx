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
  TablePagination,
  TableFooter,
  useTheme,
} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
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

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

const Programs = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //Convert data to a format for pagination
  let companyRows = [];
  mockData.map((company) => {
    company.supportingPrograms.forEach((program) => (
      companyRows.push({companyName: company.companyName, supportingPrograms: program})
    ));
  });
  let rows = companyRows.length;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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
                  {(rowsPerPage > 0
                    ? companyRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                  )
                  .map((company) => {
                    return (
                      <DashboardRow
                        name={company.companyName}
                        program={company.supportingPrograms}
                        key={company.companyName + Math.random()}
                      />
                    )})}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    count={rows}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>

              </Table>

            </Paper>
          </Grid>
        </Container>
      </main>
    </Fragment>
  );
};

export default Programs;
