import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../withRoot";
import { TwitterConsumer } from "../../context";
import InfiniteScroll from "react-infinite-scroller";
import TweetItem from "./tweetItem";
import { Progress } from "../../components";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    overflow: "auto"
  }
});

class TwitterView extends Component {
  render() {
    const { classes } = this.props;
    return (
      <TwitterConsumer>
        {({ appState, actions }) => {
          const { twitterList, hasMoreTwitterListItems } = appState;
          const { tweetListItemClick } = actions;
          return (
            <div className={classes.root}>
              <InfiniteScroll
                pageStart={0}
                hasMore={hasMoreTwitterListItems}
                loadMore={actions.loadMoreTweets}
                loader={<Progress className="loader" key={0} />}
                useWindow={true}
              >
                {twitterList.map((item, indx) => {
                  return (
                    <TweetItem
                      key={"rss" + indx}
                      item={item}
                      tweetListItemClick={tweetListItemClick}
                    />
                  );
                })}
              </InfiniteScroll>
            </div>
          );
        }}
      </TwitterConsumer>
    );
  }
}

TwitterView.displayName = "TwitterView";
TwitterView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(TwitterView));
