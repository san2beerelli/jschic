import React, { Component } from "react";
import { DataProvider } from "./AppContext";
import Fire from "../store/firebase/fire";

class AppProvider extends Component {
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
      Fire.fireDB().then(result => this.setRssFeedsList(result));
    } else {
      Fire.next().then(result => this.setRssFeedsList(result));
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
      <DataProvider value={{ appState: this.state, actions: this.actions }}>
        {this.props.children}
      </DataProvider>
    );
  }
}

export default AppProvider;
