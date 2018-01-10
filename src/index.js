import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import './index.css';
import AppRouter from './AppRouter';

// Create the ApolloClient instance 
const SERVICE_ID = 'cjc8qcgbj1bxm0175g4fnf3xd';
const WSS_LINK = 'wss://subscriptions.ap-northeast-1.graph.cool/v1/'
const HTTPS_LINK = 'https://api.graph.cool/simple/v1/'

// Set up subscription
const wsLink = new WebSocketLink({
  uri: WSS_LINK + SERVICE_ID,
  options: {
    reconnect: true
  }
});
const httpLink = new HttpLink({ uri: HTTPS_LINK + SERVICE_ID, });

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// Create a higher-order component to wrap the App component
const withApolloProvider = Comp => (
  <ApolloProvider client={client}>{Comp}</ApolloProvider>
);

ReactDOM.render(
  withApolloProvider(<AppRouter />),
  document.getElementById('root'),
);

registerServiceWorker();
