import React, { Component } from "react";
import { BaseTwitterProvider } from "../twitter/TwitterContext";
import Fire from "../../store/firebase/fire";

class TwitterProvider extends Component {
  state = {
    twitterList: [],
    hasMoreTwitterListItems: true,
    openRssModal: false,
    selectedFeed: {}
  };
  actions = {
    loadMoreTweets: page => this.loadMoreTweets(page),
    tweetListItemClick: (item, type) =>
      this.tweetListItemClickHandler(item, type),
    tweetIframeClose: () => this.tweetIframeCloseHandler()
  };
  fireBase;
  setTwitterFeedsList(result) {
    if (result) {
      const twitterList = [...this.state.twitterList, ...result];
      this.setState({ twitterList });
    } else {
      this.setState({ hasMoreTwitterListItems: false });
    }
  }
  loadMoreTweets(page) {
    if (page === 1) {
      this.fireBase = new Fire("twitter");
      this.fireBase.fireDB().then(result => this.setTwitterFeedsList(result));
    } else {
      this.fireBase.next().then(result => this.setTwitterFeedsList(result));
    }
  }
  tweetListItemClickHandler(item, type) {
    if (type === "next") {
      //this.setState({ openRssModal: true, selectedFeed: item });
      window.open(item.link, "_blank");
    }
  }
  rssIframeCloseHandler() {
    this.setState({ openRssModal: false });
  }
  render() {
    return (
      <BaseTwitterProvider
        value={{ appState: this.state, actions: this.actions }}
      >
        {this.props.children}
      </BaseTwitterProvider>
    );
  }
}

export default TwitterProvider;
