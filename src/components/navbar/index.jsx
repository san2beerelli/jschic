import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../withRoot";
import NavButton from "./navbutton";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: "0 10px"
  }
});

class NavBar extends Component {
  state = {
    selectedItem: this.props.navItems[0]
  };
  onNavButtonPress(clickedItem) {
    const { selectedItem } = this.state;
    if (clickedItem.type !== selectedItem.type) {
      this.setState({ selectedItem: clickedItem });
      this.props.navChange(clickedItem);
    }
  }
  render() {
    const { classes } = this.props;
    const { navItems } = this.props;
    const { selectedItem } = this.state;
    return (
      <div className={classes.root}>
        {navItems.map((item, indx) => {
          const selected = item.type === selectedItem.type;
          return (
            <NavButton
              buttonItem={item}
              key={`navigation-${indx}`}
              selected={selected}
              onButtonPress={clickedItem => this.onNavButtonPress(clickedItem)}
            />
          );
        })}
      </div>
    );
  }
}

NavBar.displayName = "NavBar";
NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
  navItems: PropTypes.array,
  navChange: PropTypes.func.isRequired
};

export default withRoot(withStyles(styles)(NavBar));
