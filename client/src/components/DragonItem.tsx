import React from 'react';
import classNames from 'classnames';

type Props = {
  dragon: any
}

const DragonItem: React.FC<Props> = ({ dragon: { id, name, crew_capacity } }) => {
  //console.log(launch);
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <p className={classNames({
            'text-danger': id
          })}> Dragon ID: {id} </p>
          <p> Dragon Name: {name} </p>
          <p> Crew Capacity: {crew_capacity} </p>
         
        </div>
      </div>
    </div>
  )
}

export default DragonItem
