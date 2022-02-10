import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
import {BrowserRouter} from "react-router-dom";

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ApolloProvider client={client}>
              <App />
          </ApolloProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
