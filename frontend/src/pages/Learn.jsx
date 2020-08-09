import React, { Fragment } from "react";
import { CardMedia, Container, Grid, Typography } from "@material-ui/core";
import PageTitle from "../components/PageTitle";
import Video from "../components/Video";
import Scrollbar from "../components/Scrollbar";

const mockVideos = require("../youtube.json");

const Learn = (props) => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <PageTitle pageTitle="LEARN" />
        <Grid container>
          <Grid item xs={7}>
            <Video />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Scrollbar />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Learn;
