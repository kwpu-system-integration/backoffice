import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Login from './googleLogin'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {". Built with "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI.
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/68630469_2288657627920589_8021427152761126912_o.jpg?_nc_cat=103&_nc_oc=AQn2g4npqI5MYwqtS8zBILIhy-HmP9Wztm6Ib_J2zxOrJ9nZd6o9KZ3IpmMkp_Bnbsg&_nc_ht=scontent-icn1-1.xx&oh=62735cf2a6909e650ea59a73a1757c9b&oe=5E0C5ACE)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function Signin() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img
            src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/13166061_1125437644194041_8229412022431604339_n.jpg?_nc_cat=110&_nc_oc=AQl3yng-T5SixcW5MFSoZzn1STMlUwqdlqWQkwWurfJNb44qL2LFiFVwfzJHmi_WvVI&_nc_ht=scontent-icn1-1.xx&oh=f2ed27079d333266717b1a4682b635d7&oe=5DD61709"
            alt="kwpu"
            className={"kwpu-img"}
          />
          <Typography component="h1" variant="h5">
            Social Login for KWPU
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <i
              className="fa fa-facebook-square common-icon-font"
              aria-hidden={true}
            />
            <span className={"common_margin"}>Facebook Login</span>
          </Button>
          <Login />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default Signin;
