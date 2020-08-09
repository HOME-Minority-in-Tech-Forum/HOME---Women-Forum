import React from "react";
import { withRouter, Link as RouterLink } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Button,
  IconButton,
  CssBaseline,
  Container,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Link,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.navbar.default,
    color: theme.palette.text.primary,
  },
  centerText: {
    align: "center",
  },
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
  },
  toolbarMiddle: {
    display: "flex",
    maxWidth: "69vw",
    marginLeft: "5rem",
    justifyContent: "space-even",
  },
  toolbarRight: {
    justifyContent: "right",
    marginLeft: "auto",
  },
  rightButton: {
    margin: theme.spacing(1, 3),
  },
  signUpButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton>
            <Typography>
              <Link
                color="textPrimary"
                variant="subtitle1"
                component={RouterLink}
                to="/"
              >
                HOME
              </Link>
            </Typography>
          </IconButton>
          <Container className={classes.toolbarMiddle}>
            <ListItem component="div">
              <ListItemText inset>
                <Link
                  variant="subtitle1"
                  component={RouterLink}
                  to="/learn"
                  color="textPrimary"
                  underline="none"
                  align="center"
                  className={classes.centerText}
                >
                  LEARN
                </Link>
              </ListItemText>
              <ListItemText inset>
                <Link
                  variant="subtitle1"
                  component={RouterLink}
                  to="/connect"
                  color="textPrimary"
                  underline="none"
                  className={classes.centerText}
                >
                  CONNECT
                </Link>
              </ListItemText>
              <ListItemText inset>
                <Link
                  variant="subtitle1"
                  component={RouterLink}
                  to="/programs"
                  color="inherit"
                  underline="none"
                  className={classes.centerText}
                >
                  PROGRAMS
                </Link>
              </ListItemText>
              <ListItemText inset>
                <Link
                  variant="subtitle1"
                  component={RouterLink}
                  to="/companies"
                  color="inherit"
                  underline="none"
                  className={classes.centerText}
                >
                  COMPANIES
                </Link>
              </ListItemText>
            </ListItem>
          </Container>
          <Box className={classes.toolbarRight}>
            <Link
              variant="subtitle1"
              color="inherit"
              underline="none"
              component={RouterLink}
              //   to="/login"
              className={classes.rightButton}
            >
              LOGIN
            </Link>

            <Button
              href="#"
              variant="contained"
              className={`${classes.rightButton} ${classes.signUpButton}`}
              component={RouterLink}
              //   to="/signup"
            >
              SIGN UP
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
