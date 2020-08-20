// To incorporate Formik, watch this https://www.youtube.com/watch?v=wAvkbSYdyRU&list=PLQg6GaokU5CwiVmsZ0d_9Zsg_DnIP_xwr&index=28
import React, { Fragment } from "react";
import {
  useTheme,
  makeStyles,
  createStyles,
  withStyles,
  fade,
  Avatar,
  Button,
  CssBaseline,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  TextField,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  OutlinedInputProps,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    marginTop: theme.spacing(5),
    border: "1px black solid",
    borderRadius: "1%",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  cssLabel: {
    color: `#79B4A9 !important`,
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `#79B4A9 !important`,
    },
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "green !important",
  },
  formControl: {
    color: "#79B4A9",
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
}));

// const useCustomTextFieldStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       border: `1px solid ${theme.palette.secondary.main}`,
//       overflow: "hidden",
//       borderRadius: "3%",
//       color: "black",
//       textColor: "black",
//       backgroundColor: "#000",
//       transition: theme.transitions.create(["border-color", "box-shadow"]),
//       //   "&:hover": {
//       //     backgroundColor: "#fff",
//       //   },
//       "&$focused": {
//         color: theme.palette.text.primary,
//         backgroundColor: "#fff",
//         borderColor: theme.palette.secondary.dark,
//       },
//     },
//     focused: {},
//   })
// );

// // Custom TextField
// function CustomTextField(props) {
//   const classes = useCustomTextFieldStyles();

//   return (
//     <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
//   );
// }

export default function AuthForm(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [state, setState] = React.useState({
    member: true,
    mentor: false,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { member, mentor } = state;
  const { heading, buttonText, signUp } = props;
  console.log(heading);
  const error = [member, mentor].filter((v) => v).length !== 1;

  return (
    <Container component="main" maxWidth="sm" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {heading}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {signUp && (
              <Fragment>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                      inputMode: "numeric",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                      inputMode: "numeric",
                    }}
                  />
                </Grid>
              </Fragment>
            )}

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                  inputMode: "numeric",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                  inputMode: "numeric",
                }}
              />
            </Grid>
            {signUp && (
              <Grid item xs={12}>
                <FormControl
                  error={error}
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Choose 1 role:</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={member}
                          onChange={handleChange("member")}
                          value="member"
                        />
                      }
                      label="Member"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={mentor}
                          onChange={handleChange("mentor")}
                          value="mentor"
                        />
                      }
                      label="Mentor"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
            )}
          </Grid>
          <Grid container justify="center">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              {buttonText}
            </Button>
          </Grid>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" color={theme.palette.text.primary}>
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
