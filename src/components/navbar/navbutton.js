import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "block",
    cursor: "pointer",
    height: 32,
    margin: "0 10px"
  }
});

class NavButton extends Component {
  render() {
    const { buttonItem, selected, onButtonPress, classes } = this.props;
    const imgSrc = selected ? buttonItem.img_selected : buttonItem.img;
    return (
      <img
        src={imgSrc}
        className={classes.root}
        onClick={() => onButtonPress(buttonItem)}
      />
    );
  }
}

NavButton.displayName = "NavButton";
NavButton.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonItem: PropTypes.object,
  selected: PropTypes.bool,
  onButtonPress: PropTypes.func
};
NavButton.defaultProps = {
  selected: false
};

export default withStyles(styles)(NavButton);
