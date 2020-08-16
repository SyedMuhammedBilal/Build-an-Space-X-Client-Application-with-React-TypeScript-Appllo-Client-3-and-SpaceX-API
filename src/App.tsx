import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Launches from './components/Launches';
import Launch from './components/Launch';
import Header from './components/Header';
import Ships from './components/Ships';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
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
          <Route exact path="/launch/:flight_number" component={Launch} />
          <Route exact path="/ships" component={Ships} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
