import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D8F6FE", // lightblue
      dark: "#001427", // rich black-blue
    },
    secondary: {
      main: "#FFEBFA", // accent buttons, baby pink
      dark: "#EA526F", // dark pink
    },
    background: {
      default: "#fff", // white in background
    },
    text: {
      primary: "#000", // black
      secondary: "#fff", // white
    },
  },
  navbar: {
    default: "#fff",
  },
  purple: {
    color: "#CABBE9",
  },
  overrides: {
    MuiLink: {
      root: {
        cursor: "pointer",
      },
    },
    // MuiInputLabel: {
    //   // Name of the component ⚛️ / style sheet
    //   root: {
    //     // Name of the rule
    //     color: "#EA526F",
    //     "&$focused": {
    //       // increase the specificity for the pseudo class
    //       color: "#EA526F",
    //     },
    //   },
    // },
  },
});

export default theme;
