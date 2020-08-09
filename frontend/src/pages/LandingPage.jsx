import React, { useState } from "react";
import { withRouter, Link as RouterLink } from "react-router-dom";
import {
  makeStyles,
  Box,
  ButtonBase,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";
import HeroImage from "../assets/landing.png";
// import Learn from "../assets/Icons/Learn.svg";
// import Connect from "../assets/Icons/Connect.svg";
// import Company from "../assets/Icons/Company.svg";
// import Program from "../assets/Icons/Program.svg";

const useStyles = makeStyles((theme) => ({
  flexBox: {
    display: "flex",
  },
  flexBoxCenter: {
    display: "flex",
    justifyContent: "center",
  },

  /**** TITLE *******/
  pageTitle: {
    margin: theme.spacing(5),
  },
  titleParagraph: {
    color: theme.palette.text.primary,
  },

  /* Hero */
  heroContainer: {
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(10),
    display: "flex",
  },
  cardDetails: {
    flex: 1,
    padding: theme.spacing(3, 1, 0),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    height: "100vh",
    // paddingBottom: theme.spacing(8),
    // marginBottom: theme.spacing(1),
  },
  featuredParagraph: {
    margin: theme.spacing(1, 0),
  },
  featuredImage: {
    height: "50vh",
    objectFit: "cover",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  flexBoxCenter: {
    display: "flex",
    alignContent: "center",
    textAlign: "center",
  },
  headerStyle: {
    marginBottom: "5rem",
  },
  iconImage: {
    height: "30px",
    width: "50px",
    objectFit: "cover",
    maxHeight: "50px",
    paddingTop: "25%",
    margin: "0 auto",
  },
  cardStyle: {
    borderRadius: "4px",
    boxShadow: "none",
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const cards = [
    {
      title: "Learn",
      icon: "../assets/Icons/Learn.svg",
      subtitle: "Videos on how to survive and thrive in Tech industry",
      link: "/learn",
      backgroundColor: "#FFEBFA",
    },
    {
      title: "Connect",
      icon: "../assets/Icons/Connect.svg",
      subtitle: "Talk about what you love and enrich your social life",
      link: "/connect",
      backgroundColor: "#D8F6FE",
    },
    {
      title: "Programs",
      icon: "../assets/Icons/Program.svg",
      subtitle:
        "See supporting programs for minorities from different companies",
      link: "/programs",
      backgroundColor: "#D8F6FE",
    },
    {
      title: "Companies",
      icon: "../assets/Icons/Company.svg",
      subtitle: "See how companies are supporting women and minorities",
      link: "/companies",
      backgroundColor: "#FFEBFA",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Title */}
        <Container maxWidth="lg">
          <Box m={2} align="center">
            <Typography gutterBottom variant="h2">
              HOME
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            paragraph
            align="center"
            className={classes.titleParagraph}
          >
            A community for women and minorites in Tech to grow and thrive
            together
          </Typography>
        </Container>
        {/* End Title */}
        <Container maxWidth="lg">
          {/* Hero */}
          <Card className={classes.heroContainer}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Grid container className={classes.flexBox}>
                  {cards.map((card) => (
                    <Grid item key={card.title} xs={6}>
                      <CardActionArea className={classes.cardStyle}>
                        <ButtonBase
                          focusRipple
                          component={RouterLink}
                          to={card.link}
                        >
                          <Card
                            className={classes.card}
                            style={{
                              ...classes.card,
                              backgroundColor: card.backgroundColor,
                            }}
                          >
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h6"
                                align="center"
                              >
                                {card.title}
                              </Typography>

                              <CardMedia
                                className={classes.iconImage}
                                // image={Learn}                // works
                                // src={require(card.icon)}     // module not found
                                // image={card.icon}            // nothing
                                title="Image title"
                              />
                              <Typography align="left">
                                {card.subtitle}
                              </Typography>
                            </CardContent>
                            <CardActions
                              className={classes.flexBoxCenter}
                            ></CardActions>
                          </Card>
                        </ButtonBase>
                      </CardActionArea>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              {/* Left side */}
              {/* Right side */}
              <Grid item xs={6}>
                <CardMedia
                  className={classes.featuredImage}
                  image={HeroImage}
                  title="Image title"
                />
              </Grid>
            </Grid>
          </Card>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default withRouter(LandingPage);
