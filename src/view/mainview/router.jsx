import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RssView from "../rss";
import { RssProvider } from "../../context";

const AppRouter = () => (
  <React.Fragment>
    <Route exact path="/" component={Rss} />
    <Route path="/tweets" component={About} />
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

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

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
