import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Iframe from "react-iframe";
import { DataConsumer } from "../../context/AppContext";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class IframeModal extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <DataConsumer>
        {({ appState, actions }) => {
          const { openRssModal, selectedFeed } = appState;
          const { rssIframeClose } = actions;
          return (
            <Dialog
              fullScreen
              open={openRssModal}
              TransitionComponent={Transition}
            >
              <AppBar color="default" className={classes.appBar}>
                <Toolbar>
                  <Typography
                    variant="title"
                    color="inherit"
                    className={classes.flex}
                  >
                    {selectedFeed.title}
                  </Typography>
                  <IconButton
                    color="inherit"
                    onClick={() => rssIframeClose()}
                    aria-label="Close"
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Iframe
                url={selectedFeed.link}
                position="absolute"
                width="100%"
                height="100%"
                allowFullScreen
              />
            </Dialog>
          );
        }}
      </DataConsumer>
    );
  }
}

IframeModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IframeModal);
