import React, { Fragment } from "react";
import { withRouter, Link as RouterLink } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Button,
  Box,
  IconButton,
  CssBaseline,
  ListItem,
  ListItemText,
  MenuItem,
  Menu,
  Toolbar,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  nested: {
    paddingLeft: theme.spacing(2),
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
    flexWrap: "no-wrap",
    // flexGrow: "1",
    justifyContent: "space-even",
  },
  toolbarMiddle: {
    display: "flex",
    // maxWidth: "69vw",
    flexGrow: "1",
    // marginLeft: "5rem",
    justifyContent: "space-even",
  },
  toolbarRight: {
    // justifyContent: "right",
    // marginLeft: "auto",
    display: "inline",
  },
  rightButton: {
    margin: theme.spacing(2, 3),
    padding: theme.spacing(1.25, 3.75),
    display: "inline",
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
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

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
                underline="none"
                to="/"
              >
                HOME
              </Link>
            </Typography>
          </IconButton>
          {isMobile ? (
            <>
              <Box
                style={{ width: "100%" }}
                display="flex"
                justifyContent="flex-end"
              >
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem key={menuTitle + Math.random()} onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <Fragment>
              <Toolbar className={classes.toolbarMiddle}>
                <ListItem component="div">
                  <ListItemText inset className={classes.nested}>
                    <Link
                      variant="subtitle1"
                      component={RouterLink}
                      to="/learn"
                      color="textPrimary"
                      underline="none"
                    >
                      <Typography align="center">LEARN</Typography>
                    </Link>
                  </ListItemText>

                  <ListItemText inset>
                    <Link
                      variant="subtitle1"
                      component={RouterLink}
                      to="/programs"
                      color="inherit"
                      underline="none"
                    >
                      <Typography align="center">PROGRAMS</Typography>
                    </Link>
                  </ListItemText>
                  <ListItemText inset>
                    <Link
                      variant="subtitle1"
                      component={RouterLink}
                      to="/companies"
                      color="inherit"
                      underline="none"
                    >
                      <Typography align="center">COMPANIES</Typography>
                    </Link>
                  </ListItemText>
                  <ListItemText inset>
                    <Link
                      variant="subtitle1"
                      component={RouterLink}
                      to="/connect"
                      color="textPrimary"
                      underline="none"
                    >
                      <Typography align="center">CONNECT</Typography>
                    </Link>
                  </ListItemText>
                </ListItem>
              </Toolbar>
              <Box className={classes.toolbarRight}>
                {/* <Link
                  variant="subtitle1"
                  color="inherit"
                  underline="none"
                  component={RouterLink}
                  //   to="/login"
                  className={classes.rightButton}
                >
                  LOGIN
                </Link> */}

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
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const menuItems = [
  {
    menuTitle: "Home",
    pageURL: "/",
  },
  {
    menuTitle: "Learn",
    pageURL: "/learn",
  },
  {
    menuTitle: "Programs",
    pageURL: "/programs",
  },
  {
    menuTitle: "Companies",
    pageURL: "/companies",
  },
  {
    menuTitle: "Connect",
    pageURL: "/connect",
  },
  {
    menuTitle: "About",
    pageURL: "/about",
  },
  {
    menuTitle: "Contact",
    pageURL: "/contact",
  },
];

export default withRouter(NavBar);
