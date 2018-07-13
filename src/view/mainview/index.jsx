import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../withRoot";
import { Header } from "../../components";
import AppRouter from "./router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100vw",
    height: "100vh"
  },
  router: {
    marginTop: 60
  }
});

class MainView extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <Header />
          <div className={classes.router}>
            <AppRouter />
          </div>
        </div>
      </Router>
    );
  }
}

MainView.displayName = "MainView";
MainView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(MainView));
