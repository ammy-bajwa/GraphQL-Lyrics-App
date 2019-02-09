import React from 'react';
import ReactDOM from 'react-dom';
import '../client/style/style.css';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo'
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import SongList from './components/SongList'
import App from './components/App'
import SongCreate from './components/SongCreate'
import SongDetails from './components/SongDetails'

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}></IndexRoute>
        </Route>
        <Route path='/create' component={SongCreate} />
        <Route path='/songs/:id' component={SongDetails} />
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
