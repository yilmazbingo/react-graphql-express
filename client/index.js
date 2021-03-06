import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import AppRouter from "./Router";
// import "normalize.css/normalize.css";
import "./main.scss";

//this will connect our client to the endpoint

const uri =process.env.GRAPHQL_SERVER
const link = new HttpLink({
  uri,
});

//in redux we use selectors to cache the state
const cache = new InMemoryCache();

//apollo client talks to backend and stores the data. it caches the data. it is like REDUX
const client = new ApolloClient({ cache, link, dataIdFromObject: (o) => o.id });
// it takes every piece of data is fetched by apollo client
// o.id is used to identify inside the apollo store. with this conf, we have to return id of the query. now Apollo will see if any data is updated
// ApolloClient is not aware of the front end framework

//ApolloProvider gets the stored data from ApolloClient and injects it to our app.
ReactDOM.render(
  <ApolloProvider client={client}>
    {" "}
    <AppRouter></AppRouter>
  </ApolloProvider>,

  document.querySelector("#root")
);
