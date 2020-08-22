import React, { Fragment } from "react"
import { withRouter, Link as RouterLink } from "react-router-dom"
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
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { fonts } from "../lib/typography"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexRow: 1,
    // paddingTop: 20,
    // paddingBottom: 20,
    align: "center",
    backgroundColor: "#F8FAFF",
  },

  // Default Style For Home Link
  navHomeContainer: {
    display: "flex",
    flexGrow: 1,
  },

  navInnerMenuContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },

  navInnerMenuList: {
    display: "flex",
    flexGrow: 0,
  },

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
    // borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#F8FAFF",
    color: theme.palette.text.primary,
    // paddingTop: 20,
    // paddingBottom: 20,
    align: "center",
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
}))

const useIterFont = makeStyles((theme) => ({
  typography: {
    fontFamily: theme.typography,
  },
}))

const typography = {
  regular: {
    fontFamily: `${fonts.regular}`,
    fontWeightRegular: `${fonts.regular.fontWeight}`,
    fontSize: `1.25rem`,
  },
}

const NavBar = (props) => {
  const { history } = props
  const classes = useStyles()
  const fontClass = useIterFont()
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
    setAnchorEl(null)
  }

  const handleButtonClick = (pageURL) => {
    history.push(pageURL)
  }

  return (
    // Main Nav Bar Container
    <div className={classes.root}>
      <CssBaseline />
      {/* Inner NavBar Container */}
      <AppBar
        position="static"
        elevation={0}
        style={{ backgroundColor: "#F8FAFF" }}
      >
        <div className={classes.navHomeContainer}>
          <Toolbar>
            <IconButton>
              <Typography>
                <Link
                  style={{
                    fontFamily: "Lato",
                    fontWeight: 700,
                    color: "#454550",
                    fontSize: "1rem",
                  }}
                  variant="subtitle1"
                  component={RouterLink}
                  underline="none"
                  to="/"
                >
                  HOME
                </Link>
              </Typography>
            </IconButton>
          </Toolbar>
        </div>
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
                const { menuTitle, pageURL } = menuItem
                return (
                  <MenuItem onClick={() => handleMenuClick(pageURL)}>
                    {menuTitle}
                  </MenuItem>
                )
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
                    <Typography
                      align="center"
                      style={{
                        fontFamily: "Lato",
                        fontWeight: 700,
                        color: "#454550",
                        fontSize: "1rem",
                      }}
                    >
                      LEARN
                    </Typography>
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
                    <Typography
                      align="center"
                      style={{
                        fontFamily: "Lato",
                        fontWeight: 700,
                        color: "#454550",
                        fontSize: "1rem",
                      }}
                    >
                      PROGRAMS
                    </Typography>
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
                    <Typography
                      align="center"
                      style={{
                        fontFamily: "Lato",
                        fontWeight: 700,
                        color: "#454550",
                        fontSize: "1rem",
                      }}
                    >
                      COMPANIES
                    </Typography>
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
                    <Typography
                      align="center"
                      style={{
                        fontFamily: "Lato",
                        fontWeight: 700,
                        color: "#454550",
                        fontSize: "1rem",
                      }}
                    >
                      CONNECT
                    </Typography>
                  </Link>
                </ListItemText>
              </ListItem>
            </Toolbar>
            <Box className={classes.toolbarRight}>
              <Link
                variant="subtitle1"
                color="inherit"
                underline="none"
                component={RouterLink}
                //   to="/login"
                className={classes.rightButton}
                style={{
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "#454550",
                  fontSize: "1rem",
                }}
              >
                LOGIN
              </Link>

              <Button
                href="#"
                variant="contained"
                className={`${classes.rightButton} ${classes.signUpButton}`}
                component={RouterLink}
                //   to="/signup"
                style={{
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "#454550",
                  fontSize: "1rem",
                }}
              >
                SIGN UP
              </Button>
            </Box>
          </Fragment>
        )}
        {/* </Toolbar> */}
      </AppBar>
    </div>
  )
}

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
]

// export default withRouter(NavBar)
