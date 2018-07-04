import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../withRoot";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Logo from "../../resources/images/logo.svg";
import Tab from "@material-ui/core/Tab";
/* import NavBar from "../navbar";
import Rss from "../../resources/images/rss.svg";
import RssSelected from "../../resources/images/rss_selected.svg";
import Podcast from "../../resources/images/podcast.svg";
import PodcastSelected from "../../resources/images/podcast_selected.svg";
import Twitter from "../../resources/images/twitter.svg";
import TwitterSelected from "../../resources/images/twitter_selected.svg"; */

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: 2
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolbar}>
            <img height="32" width="110" src={Logo} />
            <Tabs
              value={this.state.value}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
              onChange={this.handleChange}
            >
              <Tab label="Rss" />
              <Tab label="Tweets" />
              <Tab label="Podcasts" />
            </Tabs>

            {/* <NavBar
              navItems={[
                { img: Rss, img_selected: RssSelected, type: "rss" },
                {
                  img: Podcast,
                  img_selected: PodcastSelected,
                  type: "podcast"
                },
                {
                  img: Twitter,
                  img_selected: TwitterSelected,
                  type: "twitter"
                }
              ]}
              navChange={() => console.log("click")} />*/}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Header));
