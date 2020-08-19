import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import DragonItem from './DragonItem';

const DRAGONS_QUERY = gql`
  query ShipsQuery {
    dragons {
      id,
      name,
      crew_capacity
    }
  }
`;


export default class Dragons extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="display-4 my-3"> Dragons </h1>
          <Query query={DRAGONS_QUERY}>
            {
              ({ loading, error, data }: boolean | string | any) => {
                if (loading) return <h4>Loading...</h4>
                if (error) console.log(error);
                console.log(data);

                return (
                  <React.Fragment>
                    {
                      data.dragons.map((dragon: { id: string | number | null | undefined; }) => (
                        <DragonItem key={dragon.id} dragon={dragon} />
                      ))
                    }
                  </React.Fragment>
                )
              }
            }
          </Query>
        </div>
      </React.Fragment>
    )
  }
}
