import React from 'react';

const StationForm = props => {
  const { handleChange, stationList, handleSubmit } = props;

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="station">Select Station: </label>
      <select name="station" onChange={handleChange} required>
        <option value="" hidden>Choose station</option>
        {stationList.map((element, index) => {
          return (
            <option value={element.abbr} key={index}>{element.name}</option>
          );
        })}
      </select>
      <input type="submit"></input>
    </form>
  );
};

export default StationForm;
