import React from 'react';

import StationLine from './StationLine.jsx';

const StationSchedule = props => {
  const { etd } = props;

  return (
  <div>
    <div>STATION SCHEDULE</div>
    <div>
      {Object.keys(etd).map((key, index) => <StationLine routeName={key} min={etd[key]} key={index} />)}
    </div>
  </div>
  );
}

export default StationSchedule;
