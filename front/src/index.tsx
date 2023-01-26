import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
     <ApolloProvider client={client}>
     <App />

     </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
