import React from "react";
import {
  makeStyles,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";

const cards = [1, 2, 3, 4, 5, 6];

const useStyles = makeStyles((theme) => ({
  /* 6 cards */
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
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
      <CssBaseline />
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  Title
                </Typography>
                <Typography align="left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate impedit magnam culpa
                </Typography>
              </CardContent>
              <CardActions className={classes.flexBoxCenter}>
                <Button
                  size="medium"
                  color="primary"
                  className={classes.learnMoreButton}
                  variant="contained"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.moreProjects}>
        <Button size="large" color="secondary" variant="contained">
          More Projects
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Companies;
