import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../withRoot";
import CircularProgress from "@material-ui/core/CircularProgress";
import ListItem from "@material-ui/core/ListItem";

const styles = theme => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

class Progress extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ListItem>
        <div className={classes.root}>
          <CircularProgress size={50} />
        </div>
      </ListItem>
    );
  }
}

Progress.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Progress));
