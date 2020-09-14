import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.spacexdata.com/v4/launches/latest"
  })
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);


