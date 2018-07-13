import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RssView from "../rss";
import TwitterView from "../twitter";
import { RssProvider } from "../../context";
import { TwitterProvider } from "../../context";

const AppRouter = () => (
  <React.Fragment>
    <Route exact path="/" component={Rss} />
    <Route path="/tweets" component={Twitter} />
    <Route path="/podcast" component={Topics} />
  </React.Fragment>
);

const Rss = () => {
  return (
    <RssProvider>
      <RssView />
    </RssProvider>
  );
};

const Twitter = () => {
  return (
    <TwitterProvider>
      <TwitterView />
    </TwitterProvider>
  );
};

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default AppRouter;
