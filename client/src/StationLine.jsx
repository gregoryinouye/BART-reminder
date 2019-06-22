import React from 'react';

import Train from './Train.jsx';

const StationLine = props => {
  const { routeName, min } = props;

  return (
    <div>
      <div>
        {routeName}
      </div>
      <div>
        {min.map((element, index) => <Train min={element} key={index} />)}
      </div>
    </div>
  );
}

export default StationLine;
