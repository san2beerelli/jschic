import React from "react";
const Context = React.createContext();
const { Provider, Consumer } = Context;

export { Provider as BaseTwitterProvider, Consumer as TwitterConsumer };
