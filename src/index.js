import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create the ApolloClient instance 
const SERVICE_ID = 'cjc8qcgbj1bxm0175g4fnf3xd';
const client = new ApolloClient({
  link: new HttpLink('https://api.graph.cool/simple/v1/' + SERVICE_ID),
  cache: new InMemoryCache(),
});

// Create a higher-order component to wrap the App component
const withApolloProvider = Comp => (
  <ApolloProvider client={client}>{Comp}</ApolloProvider>
);

ReactDOM.render(
    withApolloProvider(<App />),
    document.getElementById('root')
);

registerServiceWorker();
