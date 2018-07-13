import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RssView from "../rss";
import TwitterView from "../twitter";
import PodcastView from "../podcast";
import { RssProvider } from "../../context";
import { TwitterProvider } from "../../context";
import { PodcastProvider } from "../../context";

const AppRouter = () => (
  <React.Fragment>
    <Route exact path="/" component={Rss} />
    <Route path="/tweets" component={Twitter} />
    <Route path="/podcast" component={Podcast} />
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

const Podcast = () => {
  return (
    <PodcastProvider>
      <PodcastView />
    </PodcastProvider>
  );
};

export default AppRouter;
