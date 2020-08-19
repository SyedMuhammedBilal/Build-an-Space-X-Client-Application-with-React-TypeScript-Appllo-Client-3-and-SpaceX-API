import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

type Props = {
  launch: any
}

const LaunchItem: React.FC<Props> = ({ launch: { flight_number, mission_name, launch_date_local, launch_success, launch_site, static_fire_date_unix, launch_date_unix, ships } }) => {
  //console.log(launch);
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4> Mission:
            <span className={classNames({
              'text-success': launch_success,
              'text-danger': !launch_success
            })}>
              {mission_name}
            </span>
          </h4>
          <p> Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment> </p>
          <p> Launch Site: {launch_site.site_name} </p>
          <p> Launch Date Unix: {launch_date_unix} </p>
          <p> Fire Date Unix: {static_fire_date_unix} </p>
         
        </div>
        <div className="col-md-3">
            <Link to={`/launch/${flight_number}`} className="btn btn-secondary"> Launch Details </Link>
        </div>
      </div>
    </div>
  )
}

export default LaunchItem
