import React, { useEffect, useState } from "react";
import { withRouter, Link as RouterLink } from "react-router-dom";
import {
  makeStyles,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import PageTitle from "../components/PageTitle";
import CircularLoading from "../components/CircularLoading";
import sex from "../assets/sex.png";
import race from "../assets/race.png";
const mockData = require("../data.json");

const useStyles = makeStyles((theme) => ({
  /* Cards */
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "10px 10px 5px #C3CFD5",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
    height: 0,
    width: "100%",
  },
  cardContent: {
    padding: theme.spacing(2, 3),
    flexGrow: 1,
    background: "linear-gradient(45deg, #D8F6FE 30%, #FFEBFA 90%)",
  },
  buttons: {
    marginTop: theme.spacing(4),
  },
  leftButton: {
    backgroundColor: theme.purple.color,
    color: theme.palette.text.primary,
  },
  rightButton: {
    backgroundColor: theme.purple.color,
    color: theme.palette.text.primary,
  },
  moreCompanies: {
    justifyContent: "center",
    marginTop: theme.spacing(7),
  },
}));

const CompanySpec = (props) => {
  const classes = useStyles();

  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile(
      mockData[mockData.findIndex((data) => data.id === props.match.params.id)]
    );
  }, []);
  // console.log(`Company NAME: ${profile.companyName}`);
  // console.log(profile);
  // console.log(profile.women);
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <PageTitle pageTitle={profile.companyName} />

        {profile.women && <Stats profile={profile} />}
        {profile.statsImageRace && (
          <img src={sex} width="600px" height="500px"></img>
        )}
        {profile.statsImageSex && (
          <img src={race} width="600px" height="500px"></img>
        )}
        <Grid container className={classes.moreCompanies}>
          <Button
            size="large"
            color="secondary"
            variant="contained"
            component={RouterLink}
            to="/companies/"
          >
            See More Companies
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const Stats = (props) => {
  const { profile } = props;
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={3} align="center">
        {profile.women && <CircularLoading max={profile.women} />}
        <Box>Women</Box>
      </Grid>
      <Grid item xs={12} sm={3} align="center">
        {profile.asian && <CircularLoading max={profile.asian} />}
        <Box>Asian</Box>
      </Grid>
      <Grid item xs={12} sm={3} align="center">
        {profile.african_american && (
          <CircularLoading max={profile.african_american} />
        )}
        <Box>African_American</Box>
      </Grid>
      <Grid item xs={12} sm={3} align="center">
        {profile.hispanic && <CircularLoading max={profile.hispanic} />}
        <Box>Hispanic</Box>
      </Grid>
    </Grid>
  );
};

export default withRouter(CompanySpec);
