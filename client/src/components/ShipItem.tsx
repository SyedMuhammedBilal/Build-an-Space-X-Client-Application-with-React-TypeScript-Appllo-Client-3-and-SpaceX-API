import React from 'react';
import classNames from 'classnames';

type Props = {
  ship: any
}

const ShipItem: React.FC<Props> = ({ ship: { ship_id, ship_name, weight_lbs, weight_kg, home_port } }) => {
  //console.log(launch);
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <p className={classNames({
            'text-success': ship_id
          })}> Ship ID: {ship_id} </p>
          <p> Ship Name: {ship_name} </p>
          <p> Weight in KiloGram: {weight_kg} </p>
          <p> Weight in Pounds: {weight_lbs} </p>
          <p> Port Name: {home_port} </p>
         
        </div>
      </div>
    </div>
  )
}

export default ShipItem
