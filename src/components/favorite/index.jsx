import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import withRoot from "../../withRoot";

const styles = theme => ({
  root: {}
});

class Favorite extends Component {
  state = {
    selected: false
  };
  onIconClick = () => {
    const { onChange } = this.props;
    this.setState(prevState => {
      return { selected: !prevState.selected };
    });
    onChange(!this.state.selected);
  };
  render() {
    const { classes } = this.props;
    const { selected } = this.state;
    return (
      <div className={classes.root}>
        {selected ? (
          <FavoriteIcon onClick={() => this.onIconClick()} />
        ) : (
          <FavoriteBorderIcon onClick={() => this.onIconClick()} />
        )}
      </div>
    );
  }
}

Favorite.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func
};

export default withRoot(withStyles(styles)(Favorite));
