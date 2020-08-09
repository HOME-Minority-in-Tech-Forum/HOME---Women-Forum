import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";

import LandingPage from "./pages/LandingPage";
import Learn from "./pages/Learn";
import Programs from "./pages/Programs";
import Companies from "./pages/Companies";
import Connect from "./pages/Connect";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <Switch>
              <Route exact={true} path="/" component={LandingPage} />
              <Route exact={true} path="/learn" component={Learn} />
              <Route exact={true} path="/programs" component={Programs} />
              <Route exact={true} path="/companies" component={Companies} />
              <Route exact={true} path="/connect" component={Connect} />
              <Route component={NotFoundPage} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
