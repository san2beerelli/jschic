import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../withRoot";
import { DataConsumer } from "../../context/AppContext";
import InfiniteScroll from "react-infinite-scroller";
import RssItem from "./rssItem";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    overflow: "auto"
  }
});

class RssView extends Component {
  loadFunc() {}
  render() {
    const { classes } = this.props;
    return (
      <DataConsumer>
        {({ appState, actions }) => {
          const itemCount = appState.rssList.length
            ? appState.rssList.length
            : 0;
          const { rssList, hasMoreRssListItems } = appState;
          const { rssListItemClick } = actions;
          return (
            <div className={classes.root}>
              <InfiniteScroll
                pageStart={0}
                hasMore={hasMoreRssListItems}
                loadMore={actions.loadMoreRss}
                loader={
                  <div className="loader" key={0}>
                    Loading ...
                  </div>
                }
                useWindow={true}
              >
                {rssList.map((item, indx) => {
                  return (
                    <RssItem
                      key={"rss" + indx}
                      item={item}
                      rssListItemClick={rssListItemClick(item, "fav")}
                    />
                  );
                })}
              </InfiniteScroll>
            </div>
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
