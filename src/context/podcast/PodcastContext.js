import React from "react";
const Context = React.createContext();
const { Provider, Consumer } = Context;

export { Provider as BasePodcastProvider, Consumer as PodcastConsumer };
