import React, { Component } from "react";
import { BaseRssProvider } from "../rss/RssContext";
import Fire from "../../store/firebase/fire";

class RssProvider extends Component {
  state = {
    rssList: [],
    hasMoreRssListItems: true,
    openRssModal: false,
    selectedFeed: {}
  };
  actions = {
    loadMoreRss: page => this.loadMoreRss(page),
    rssListItemClick: (item, type) => this.rssListItemClickHandler(item, type),
    rssIframeClose: () => this.rssIframeCloseHandler()
  };
  fireBase;
  setRssFeedsList(result) {
    if (result) {
      const rssList = [...this.state.rssList, ...result];
      this.setState({ rssList });
    } else {
      this.setState({ hasMoreRssListItems: false });
    }
  }
  loadMoreRss(page) {
    if (page === 1) {
      this.fireBase = new Fire("rss");
      this.fireBase.fireDB().then(result => this.setRssFeedsList(result));
    } else {
      this.fireBase.next().then(result => this.setRssFeedsList(result));
    }
  }
  rssListItemClickHandler(item, type) {
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
      <BaseRssProvider value={{ appState: this.state, actions: this.actions }}>
        {this.props.children}
      </BaseRssProvider>
    );
  }
}

export default RssProvider;
