import React, { Fragment } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "500",
    // fontSize: "1.1rem",
  },
}));

const PageTitle = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box m={5} align="center">
        <Typography gutterBottom variant="h2" className={classes.title}>
          {props.pageTitle}
        </Typography>
      </Box>
    </Fragment>
  );
};

export default PageTitle;
