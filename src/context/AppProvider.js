import React, { Component } from "react";
import { DataProvider } from "./AppContext";
import Fire from "../store/firebase/fire";

class AppProvider extends Component {
  state = {
    rssList: []
  };
  actions = {};
  componentDidMount() {
    let rssDB = Fire.fireDB("rss");
    const me = this;
    rssDB.once("value").then(function(snapshot) {
      me.setState({ rssList: Object.values(snapshot.val()) });
    });
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
