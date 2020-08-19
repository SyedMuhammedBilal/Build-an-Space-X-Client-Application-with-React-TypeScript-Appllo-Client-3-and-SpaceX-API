import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Launches from './components/Launches';
import Launch from './components/Launch';
import Header from './components/Header';
import Ships from './components/Ships';
import Dragons from './components/Dragons';

const client = new ApolloClient({
  uri: "http://spacexdata.herokuapp.com/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className="container">
          {/*<img
            src={logo}
            alt="spaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />*/}
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:id" component={Launch} />
          <Route exact path="/ships" component={Ships} />
          <Route exact path="/dragons" component={Dragons} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
