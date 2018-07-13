import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../withRoot";

const styles = theme => ({
  listItemStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

class RssItem extends Component {
  render() {
    const { item, classes } = this.props;
    return (
      <React.Fragment>
        <ListItem>
          <div className={classes.listItemStyle}>
            <IconButton onClick={() => rssListItemClick(item, "fav")}>
              <FavoriteBorderIcon />
            </IconButton>
            <Typography variant="body1" gutterBottom>
              {item.title}
            </Typography>
            <ListItemSecondaryAction
              onClick={() => rssListItemClick(item, "next")}
            >
              <IconButton>
                <NavigateNextIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </div>
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  }
}

RssItem.displayName = "RssItem";
RssItem.propTypes = {
  item: PropTypes.object,
  rssListItemClick: PropTypes.func,
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(RssItem));
