import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../withRoot";
import { DataConsumer } from "../../context/AppContext";
import InfiniteScroll from "react-infinite-scroller";
import RssItem from "./rssItem";
import { Progress } from "../../components";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    overflow: "auto"
  }
});

class RssView extends Component {
  render() {
    const { classes } = this.props;
    return (
      <DataConsumer>
        {({ appState, actions }) => {
          const { rssList, hasMoreRssListItems } = appState;
          const { rssListItemClick } = actions;
          return (
            <div className={classes.root}>
              <InfiniteScroll
                pageStart={0}
                hasMore={hasMoreRssListItems}
                loadMore={actions.loadMoreRss}
                loader={<Progress className="loader" key={0} />}
                useWindow={true}
              >
                {rssList.map((item, indx) => {
                  return (
                    <RssItem
                      key={"rss" + indx}
                      item={item}
                      rssListItemClick={rssListItemClick}
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
