import React, { Fragment } from "react";
import {
  makeStyles,
  Button,
  Container,
  Grid,
  CssBaseline,
  TextField,
} from "@material-ui/core";
// import SignUpImage from "../assets/SignUpImage.png";
// import organization from "../components/SignUpOrganization";
// import individual from "../components/SignUpIndividual";

//make the body a component so it varies from individual and organization

const signStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  /*containers*/
  innerContainer: {
    alignItems: "stretch",
    background: theme.palette.background.default,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2, 2),
    textAlign: "center",
  },

  signContainer: {
    width: "100%",
    border: "1px solid #292929",
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: "7px",
    transform: "matrix(1, 0, 0, 1, 0, 0)",
  },

  signHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    background: "white",
    borderRadius: "7px 7px 0px 0px",
  },
  signBody: {
    marginTop: "1%",
    width: "100%",
    overflow: "auto",
    padding: theme.spacing(1, 6, 1, 6),
  },
  signFooter: {
    width: "100%",
    padding: theme.spacing(1, 6, 1, 6),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    background: "white",
    borderRadius: "0px 0px 7px 7px",
  },

  textContainer: {
    position: "relative",
    fontSize: "12px",
    width: "100%",
    padding: theme.spacing(1, 1, 1, 1),
    alignItems: "center",
  },

  pageContainer: {
    height: "60 vmax",
    margin: "0 auto",
    textAlign: "center",
    background: "#f2f2f2",
    overflow: "hidden",
    maxWidth: "70vw",
  },
}));

const SignUp = (props) => {
  const classes = signStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container disableGutters={true} className={classes.pageContainer}>
        <Container disableGutters={true} className={classes.innerContainer}>
          <div className={classes.root}>
            <Grid container spacing={0}>
              {/*Text and Image */}
              {/* <Grid item xs={5}>
                <Container className={classes.textContainer}>
                  <h1>Create Your Team</h1>
                  <Container>
                    <h4>~ Description of our organization ~</h4>
                    <img src={SignUpImage} alt="hand" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam, tempora eligendi! Nisi provident quidem ex. Eligendi
                      blanditiis consequatur reiciendis ullam autem ducimus in
                      nulla modi, tenetur doloremque nemo voluptas delectus.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa provident incidunt quia. Eligendi incidunt possimus,
                      cum omnis facere voluptatibus atque! Autem maxime sequi
                      numquam quod quibusdam ratione quasi, nesciunt
                      consequuntur?
                    </p>
                  </Container>
                </Container>
              </Grid> */}
              {/*Sign up box */}
              <Grid item xs={12}>
                <Container
                  disableGutters={true}
                  className={classes.signContainer}
                >
                  <Container className={classes.signHeader}>
                    <h1>SIGN UP</h1>
                  </Container>
                  {/**renders here differently depending on usertype */}
                  <Container className={classes.signBody}>
                    <Grid direction="column" container spacing={1}>
                      <Grid item xs={12}>
                        <TextField label="First Name" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Last Name" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Username" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField type="tel" label="Phone Number" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField type="email" label="Email" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField type="password" label="Password" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField type="password" label="Confirm Password" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Profile description"
                          rows="4"
                          multiline={true}
                        />
                      </Grid>
                    </Grid>
                  </Container>
                  <Container className={classes.signFooter}>
                    <Button
                      fullWidth={true}
                      color="primary"
                      variant="contained"
                    >
                      Sign Up
                    </Button>
                  </Container>
                </Container>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Container>
      {/* Footer */}
      {/* <Footer /> */}
      {/* End footer */}
    </Fragment>
  );
};
export default SignUp;
