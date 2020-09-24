import React from "react"

import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Box,
  makeStyles,
  withStyles,
  Button,
} from "@material-ui/core"

import {withRouter, Link as RouterLink} from "react-router-dom"

const MinAppBar = withStyles(theme => ({
  root: {
    minHeight: "4rem",
    color: "#454550",
    backgroundColor: "#F8FAFF",
    borderTop: `1px solid  #607D8B`,
    borderBottom: `1px solid #CFD8DC`,
  },
}))(AppBar)

// This will be used just incase we get a Logo and some branding
const defaultBranding = (
  <Box>
    <RouterLink to="/" style={{color: "none", textDecoration: "none"}}>
      <Button
        style={{
          fontFamily: "Lato, Iter, sans-serif, serif",
          color: "#454550",
          fontSize: "1.125rem",
          fontWeight: 700,
        }}
      >
        Home
      </Button>
    </RouterLink>
  </Box>
)

export const SlimToolBar = withStyles(theme => ({
  root: {
    margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
    zIndex: 10,
  },
}))(Toolbar)

export function HomeAppBar({brandingLogo, desktopMenu, mobileMenu, ...rest}) {
  const classes = useStyles()
  return (
    <MinAppBar {...rest} position="static" elevation={0}>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SlimToolBar>
          {brandingLogo || defaultBranding}
          {/* <Hidden only={["xs", "sm"]}>{brandingText}</Hidden> */}
        </SlimToolBar>
        <SlimToolBar className={classes.desktopMenu}>
          <Hidden only={["xs", "sm"]}>{desktopMenu}</Hidden>
          <Hidden mdUp>{mobileMenu}</Hidden>
        </SlimToolBar>
      </Container>
    </MinAppBar>
  )
}

const useStyles = makeStyles(theme => ({
  desktopMenu: {
    "& > button": {
      marginRight: theme.spacing(2),
    },
    "& > button:last-child": {
      marginRight: theme.spacing(0),
    },
  },
}))

export default withRouter(HomeAppBar)
