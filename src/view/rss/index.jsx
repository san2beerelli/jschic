import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../withRoot";
import VirtualList from "react-tiny-virtual-list";
import { DataConsumer } from "../../context/AppContext";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {}
});

class RssView extends Component {
  render() {
    const { classes } = this.props;
    return (
      <DataConsumer>
        {({ appState }) => {
          const itemCount = appState.rssList.length
            ? appState.rssList.length
            : 0;
          const { rssList } = appState;
          return (
            <List>
              {rssList.map((item, indx) => {
                return (
                  <React.Fragment key={"rss" + indx}>
                    <ListItem>
                      <Typography variant="body1" gutterBottom>
                        {item.title}
                      </Typography>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              })}
            </List>
          );
        }}
      </DataConsumer>
    );
  }
}

RssView.displayName = "RssView";
RssView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(RssView));
