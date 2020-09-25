import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "normalize.css/normalize.css"

import LandingPage from "./pages/LandingPage"
import Learn from "./pages/Learn"
import Programs from "./pages/Programs"
import Companies from "./pages/Companies"
import CompanySpec from "./pages/CompanySpec"
import Connect from "./pages/Connect"
import NotFoundPage from "./pages/NotFoundPage"
import AuthForm from './components/AuthForm'
import NavBar from "./components/NavBar"

import { HomeAppBar } from "./components/HomeApp.Bar"
import { desktopMenu, mobileMenu } from "./components/Menu"

class App extends React.Component {
  render() {
    return (
      <Router>

        <div>
          {/* <NavBar /> */}
          <HomeAppBar desktopMenu={desktopMenu} mobileMenu={mobileMenu} />


          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/learn" component={Learn} />
            <Route exact path="/programs" component={Programs} />
            <Route exact path="/companies" component={Companies} />
            <Route
              exact={true}
              path="/companies/:id"
              component={() => <CompanySpec />}
            />
            <Route exact path="/connect" component={Connect} />
            <Route
              exact
              path="/signup"
              render={(props) => (
                <AuthForm
                  signUp
                  buttonText="Sign Up"
                  heading="Sign Up"
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) => (
                <AuthForm buttonText="Login" heading="Login" {...props} />
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
            g
          </div>
      </Router>
    )
  }
}

export default App
