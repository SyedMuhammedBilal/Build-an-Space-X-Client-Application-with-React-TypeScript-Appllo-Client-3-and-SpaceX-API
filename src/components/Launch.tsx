import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import classNames from 'classnames';

type Props = {
  flight_number: any,
  someString: any
};

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number,
      mission_name,
      launch_year,
      launch_success,
      launch_failure_details {
        time,
        reason
      },
      launch_site {
        site_name
      },
      launch_date_local,
      rocket {
        rocket_id,
        rocket_name,
        rocket_type
      }
    }
  }
`;

export class Launch extends Component<Props & RouteComponentProps> {

  render() {
    
    let { flight_number }: any = (this.props.match.params as any);
    flight_number = parseInt(flight_number);
    
    return (
      <React.Fragment>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
          {
            ({ loading, error, data }: boolean | string | any) => {
              if (loading) return <h4>Loading...</h4>
              if (error) console.log(error);

              const {
                mission_name,
                flight_number,
                launch_year,
                launch_success,
                launch_site: { site_name },
                rocket: { rocket_id, rocket_name, rocket_type }, 
              } = data.launch;

              //const { launch_failure_details: { reason } } = data.launch;

              return (
                <div>
                  <h1 className="display-4 my-3">
                    <span className="text-dark">
                      Mission: 
                    </span>
                    {mission_name}
                  </h1>
                  <h4 className="mb-3"> Launch Details </h4>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Flight Number: {flight_number}
                    </li>
                    <li className="list-group-item">
                      Launch Year: {launch_year}
                    </li>
                    <li className="list-group-item">
                      Launch Successful: <span className={classNames({
                        'text-success': launch_success,
                        'text-danger': !launch_success
                      })}>{launch_success ? 'Yes' : 'No'}</span>
                    </li>
                    <li className="list-group-item">
                      <b>Launch Site: <span> {site_name} </span></b>
                    </li> 
                   
                    
                  </ul>
                  <h4 className="h4 my-3"> Rocket Details </h4>
                  <ul className="list-group">
                    <li className="list-group-item"> Rocket ID: {rocket_id} </li>
                    <li className="list-group-item"> Rocket Name: {rocket_name} </li>
                    <li className="list-group-item"> Rocket Type: {rocket_type} </li>
                  </ul>
                  <hr />
                  <Link className="btn btn-secondary" to="/">Back</Link>
                </div>
              )
            }
          }
        </Query>
      </React.Fragment>
    )
  }
};

export default Launch