import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./theme";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import UserProvider from "./providers/UserProvider";
import { AuthProvider } from "./providers/AuthProvider";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <CssBaseline />
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </Fragment>
  </ThemeProvider>,
  document.getElementById("root"),
  // </React.StrictMode>,
  // </React.StrictMode>,
  // <React.StrictMode>
  //   <ThemeProvider theme={theme}>
  //     <Fragment>
  //       <CssBaseline />
  //       <App />
  //     </Fragment>
  //   </ThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
