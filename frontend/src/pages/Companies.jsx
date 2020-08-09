import React from "react";
import { withRouter, Link as RouterLink } from "react-router-dom";
import {
  makeStyles,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import PageTitle from "../components/PageTitle";
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
  moreProjects: {
    justifyContent: "center",
    marginTop: theme.spacing(7),
  },
}));

const Companies = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <PageTitle pageTitle="COMPANIES" />
        <Grid container spacing={4}>
          {mockData.map((company) => (
            <Grid item key={company.companyName} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={company.brandImage}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" align="center">
                    {company.companyName}
                  </Typography>
                  <Typography align="center">
                    Program Count: {company.supportingPrograms.length}
                  </Typography>
                  <div className={classes.buttons}>
                    <Grid container spacing={7}>
                      <Grid item xs={6}>
                        <Button
                          size="large"
                          variant="contained"
                          className={classes.leftButton}
                          fullWidth
                        >
                          <Link
                            color="textPrimary"
                            underline="none"
                            component={RouterLink}
                            to={"/companies/".concat(company.id)}
                          >
                            More Data
                          </Link>
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          className={classes.rightButton}
                          fullWidth
                        >
                          <Link
                            color="textPrimary"
                            underline="none"
                            href={company.website}
                          >
                            Visit
                          </Link>
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.moreProjects}>
          <Button size="large" color="secondary" variant="contained">
            More Company
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(Companies);
