import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number,
      mission_name,
      launch_year,
      launch_date_local,
      launch_site {
        site_name
      }
      launch_success
    }
  }
`;


export default class Launches extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="display-4 my-3"> Launches </h1>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data }: boolean | string | any) => {
              if (loading) return <h4>Loading...</h4>
              if (error) console.log(error);
              console.log(data);

              return (
                <React.Fragment>
                  {
                    data.launches.map((launch: { flight_number: string | number | null | undefined; }) => (
                      <LaunchItem key={launch.flight_number} launch={launch} />
                    ))
                  }
                </React.Fragment>
              )
            }
          }
        </Query>
      </React.Fragment>
    )
  }
}
