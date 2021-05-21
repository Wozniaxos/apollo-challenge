import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const API_KEY = 'c6f44684-ef76-40d0-a63a-6f852d7e9df4'

const client = new ApolloClient({
  uri: `https://api.everbase.co/graphql?apikey=${API_KEY}`,
  cache: new InMemoryCache(),
});


ReactDOM.render( 
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
