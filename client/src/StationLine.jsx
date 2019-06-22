import React from 'react';

import Train from './Train.jsx';

const StationLine = props => {
  const { routeName, min, handleChange } = props;

  return (
    <div>
      <br></br>
      <div>
        {routeName}
      </div>
      <div>
        {min.map((element, index) => <Train route={routeName} min={element} key={index} handleChange={handleChange} />)}
      </div>
    </div>
  );
}

export default StationLine;
