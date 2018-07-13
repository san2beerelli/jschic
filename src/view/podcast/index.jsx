import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../withRoot";
import { PodcastConsumer } from "../../context";
import InfiniteScroll from "react-infinite-scroller";
import PodcastItem from "./podcastItem";
import { Progress } from "../../components";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    overflow: "auto"
  }
});

class PodcastView extends Component {
  render() {
    const { classes } = this.props;
    return (
      <PodcastConsumer>
        {({ appState, actions }) => {
          const { podcastList, hasMorePodcastListItems } = appState;
          const { podcastListItemClick } = actions;
          return (
            <div className={classes.root}>
              <InfiniteScroll
                pageStart={0}
                hasMore={hasMorePodcastListItems}
                loadMore={actions.loadMorePodcasts}
                loader={<Progress className="loader" key={0} />}
                useWindow={true}
              >
                {podcastList.map((item, indx) => {
                  return (
                    <PodcastItem
                      key={"rss" + indx}
                      item={item}
                      podcastListItemClick={podcastListItemClick}
                    />
                  );
                })}
              </InfiniteScroll>
            </div>
          );
        }}
      </PodcastConsumer>
    );
  }
}

PodcastView.displayName = "PodcastView";
PodcastView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(PodcastView));
