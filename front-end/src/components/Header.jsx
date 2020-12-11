import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useAuth } from "./../hooks/use-auth";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header({ history }) {
  const classes = useStyles();
  const { user, signout } = useAuth();
  console.log(user);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#001529" }}>
        <Toolbar>
          <Typography
            variant="h6"
            style={{ color: "white" }}
            className={classes.title}
          >
            <Link style={{ color: "white" }} to="/">
              Student Accomodation
            </Link>
          </Typography>
          {user == "user" ? (
            <Button
              color="inherit"
              onClick={() => {
                signout();
                history.push("/login");
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit">
                <Link style={{ color: "white" }} to="/login">
                  Login
                </Link>
              </Button>
              <Button color="inherit">
                <Link style={{ color: "white" }} to="/signup">
                  Sign up
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(Header);
