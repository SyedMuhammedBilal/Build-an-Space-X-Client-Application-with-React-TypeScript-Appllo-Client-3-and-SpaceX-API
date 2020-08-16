import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ShipItem from './ShipItem';
import MissionKey from './MissionKey';

const SHIPS_QUERY = gql`
  query ShipsQuery {
    ships {
      ship_id,
      ship_name,
      weight_lbs,
      weight_kg,
      home_port
    }
  }
`;


export default class Ships extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="display-4 my-3"> Ships </h1>
          <Query query={SHIPS_QUERY}>
            {
              ({ loading, error, data }: boolean | string | any) => {
                if (loading) return <h4>Loading...</h4>
                if (error) console.log(error);
                console.log(data);

                return (
                  <React.Fragment>
                    {
                      data.ships.map((ship: { ship_id: string | number | null | undefined; }) => (
                        <ShipItem key={ship.ship_id} ship={ship} />
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
