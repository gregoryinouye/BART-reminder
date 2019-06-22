import React from 'react';

const UserLogin = props => {
  const { handleChange, handleSubmit } = props;

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="username">Enter Username: </label>
      <input name="username" onChange={handleChange} required />
      <input type="submit" />
    </form>
  );
}

export default UserLogin;
