import React, { Component } from "react";
import { BasePodcastProvider } from "../podcast/PodcastContext";
import Fire from "../../store/firebase/fire";

class PodcastProvider extends Component {
  state = {
    podcastList: [],
    hasMorePodcastListItems: true,
    selectedFeed: {}
  };
  actions = {
    loadMorePodcasts: page => this.loadMorePodcasts(page),
    podcastListItemClick: (item, type) =>
      this.podcastListItemClickHandler(item, type),
    tweetIframeClose: () => this.tweetIframeCloseHandler()
  };
  fireBase;
  setPodcastFeedsList(result) {
    if (result) {
      const podcastList = [...this.state.podcastList, ...result];
      this.setState({ podcastList });
    } else {
      this.setState({ hasMorePodcastListItems: false });
    }
  }
  loadMorePodcasts(page) {
    if (page === 1) {
      this.fireBase = new Fire("podcast");
      this.fireBase.fireDB().then(result => this.setPodcastFeedsList(result));
    } else {
      this.fireBase.next().then(result => this.setPodcastFeedsList(result));
    }
  }
  podcastListItemClickHandler(item, type) {
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
      <BasePodcastProvider
        value={{ appState: this.state, actions: this.actions }}
      >
        {this.props.children}
      </BasePodcastProvider>
    );
  }
}

export default PodcastProvider;
