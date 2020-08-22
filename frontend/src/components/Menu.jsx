import React from "react"
import { withRouter, Link as RouterLink } from "react-router-dom"
import {
  Button,
  MenuItem,
  Divider,
  Link,
  makeStyles,
  Box,
} from "@material-ui/core"
import { Menu as Hamburger } from "@material-ui/icons"
import HomeMenuList from "./HomeMenuList"

export const desktopMenu = (
  <>
    <Box pr={2}>
      <RouterLink to="/learn" style={{ color: "none", textDecoration: "none" }}>
        <Button
          style={{
            fontFamily: "Lato, Iter, sans-serif, serif",
            color: "#454550",
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Learn
        </Button>
      </RouterLink>
    </Box>
    <Box pr={2}>
      <RouterLink
        to="/programs"
        style={{ color: "none", textDecoration: "none" }}
      >
        <Button
          style={{
            fontFamily: "Lato, Iter, sans-serif, serif",
            color: "#454550",
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Programs
        </Button>
      </RouterLink>
    </Box>
    <Box pr={2}>
      <RouterLink
        to="/companies"
        style={{ color: "none", textDecoration: "none" }}
      >
        <Button
          style={{
            fontFamily: "Lato, Iter, sans-serif, serif",
            color: "#454550",
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Companies
        </Button>
      </RouterLink>
    </Box>

    <Box pr={2}>
      <RouterLink
        to="/connect"
        style={{ color: "none", textDecoration: "none" }}
      >
        <Button
          style={{
            fontFamily: "Lato, Iter, sans-serif, serif",
            color: "#454550",
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Connect
        </Button>
      </RouterLink>
    </Box>
    <Box pr={2}>
      <RouterLink to="/login" style={{ color: "none", textDecoration: "none" }}>
        <Button
          style={{
            fontFamily: "Lato, Iter, sans-serif, serif",
            color: "#454550",
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Login
        </Button>
      </RouterLink>
    </Box>
    <Button
      margin={0}
      to="#"
      component={RouterLink}
      variant="contained"
      style={{
        backgroundColor: "rgb(255, 64, 129, 0.7)",
        fontFamily: "Lato, Iter, sans-serif, serif",
        color: "#FFF",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      Sign up
    </Button>
  </>
)

export const mobileHamburger = (
  <HomeMenuList label={<Hamburger />}>
    <MenuItem
      href="/login"
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        color: "#454550",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      Login
    </MenuItem>
    <Divider />
    <MenuItem
      href="/learn"
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        color: "#454550",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      Learn
    </MenuItem>
    <MenuItem
      href="programs"
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        color: "#454550",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      Programs
    </MenuItem>
    <MenuItem
      href="/companies"
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        color: "#454550",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      Companies
    </MenuItem>
    <MenuItem
      href="/connect"
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        color: "#454550",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      Connect
    </MenuItem>
    <MenuItem
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        color: "#454550",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      About
    </MenuItem>
    <MenuItem
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        color: "#454550",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      Contact
    </MenuItem>
  </HomeMenuList>
)

export const mobileMenu = <>{mobileHamburger}</>
