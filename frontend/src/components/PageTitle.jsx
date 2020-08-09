import React, { Fragment } from "react";
import { Box, Container, Typography } from "@material-ui/core";

const PageTitle = (props) => {
  return (
    <Fragment>
      <Box m={5} align="center">
        <Typography gutterBottom variant="h2">
          {props.pageTitle}
        </Typography>
      </Box>
    </Fragment>
  );
};

export default PageTitle;
