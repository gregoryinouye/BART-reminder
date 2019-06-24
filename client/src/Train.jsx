import React from 'react';

const Train = props => {
  const { min, handleChange, route } = props;
  const identifier = route.concat(min);

  return (
    <div>
      <input type="radio" name="trainEtd" id={identifier} value={min} onChange={handleChange} />
      <label htmlFor={identifier}>{min}</label>
    </div>
  );
}

export default Train;
