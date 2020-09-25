import React from "react"
import {withRouter, Link as RouterLink} from "react-router-dom"
import {
  Button,
  MenuItem,
  Divider,
  Link,
  makeStyles,
  Box,
} from "@material-ui/core"
import {Menu as Hamburger} from "@material-ui/icons"
import HomeMenuList from "./HomeMenuList"

export const desktopMenu = (
  <>
    <Box pr={2}>
      <RouterLink to="/learn" style={{color: "none", textDecoration: "none"}}>
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
        style={{color: "none", textDecoration: "none"}}
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
        style={{color: "none", textDecoration: "none"}}
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
      <RouterLink to="/connect" style={{color: "none", textDecoration: "none"}}>
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
      <RouterLink
        to="/login"
        style={{
          color: "none",
          textDecoration: "none",
        }}
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
          Login
        </Button>
      </RouterLink>
    </Box>
    <RouterLink to="/signup" style={{color: "none", textDecoration: "none"}}>
      <Button
        margin={0}
        to="/signup"
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
    </RouterLink>
  </>
)

export const mobileHamburger = (
  <HomeMenuList label={<Hamburger />}>
    <MenuItem
      href="/login"
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      <RouterLink
        to="/login"
        style={{color: "#454550", textDecoration: "none"}}
      >
        Login
      </RouterLink>
    </MenuItem>
    <Divider />
    <MenuItem
      href="/signup"
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      <RouterLink
        to="/signup"
        style={{color: "#454550", textDecoration: "none"}}
      >
        Sign up
      </RouterLink>
    </MenuItem>
    <MenuItem
      href="/learn"
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      <RouterLink
        to="/learn"
        style={{color: "#454550", textDecoration: "none"}}
      >
        Learn
      </RouterLink>
    </MenuItem>
    <MenuItem
      href="programs"
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      <RouterLink
        to="/programs"
        style={{color: "#454550", textDecoration: "none"}}
      >
        Programs
      </RouterLink>
    </MenuItem>
    <MenuItem
      href="/companies"
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      <RouterLink
        to="/companies"
        style={{color: "#454550", textDecoration: "none"}}
      >
        Companies
      </RouterLink>
    </MenuItem>
    <MenuItem
      href="/connect"
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      <RouterLink
        to="/connect"
        style={{color: "#454550", textDecoration: "none"}}
      >
        Connect
      </RouterLink>
    </MenuItem>
    <MenuItem
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      <RouterLink
        to="/about"
        style={{color: "#454550", textDecoration: "none"}}
      >
        About
      </RouterLink>
    </MenuItem>
    <MenuItem
      style={{
        fontFamily: "Lato, Iter, sans-serif, serif",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      <RouterLink
        to="/contact"
        style={{color: "#454550", textDecoration: "none"}}
      >
        Contact
      </RouterLink>
    </MenuItem>
  </HomeMenuList>
)

export const mobileMenu = <>{mobileHamburger}</>
