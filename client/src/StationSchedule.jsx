import React from 'react';

import StationLine from './StationLine.jsx';

const StationSchedule = props => {
  const { etd, handleChange, stationName, time } = props;

  return (
  <form onSubmit={(e) => { e.preventDefault(); e.stopPropagation(); console.log(e.target)}}>
    <div>{stationName} Station Schedule retrieved at {time}</div>
    <div>
      {Object.keys(etd).map((property, index) => <StationLine routeName={property} min={etd[property]} key={index} handleChange={handleChange} />)}
    </div>
    <br></br>
    <div>
      <button type="submit">Set Reminder</button>
    </div>
  </form>
  );
}

export default StationSchedule;
