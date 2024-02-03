import React from 'react';

function Keypad() {
  function handleChange() {
    console.log('Entering password...');
    // Additional logic for handling the password input can be added here
  }

  return (
    <div>
      <label>Password:</label>
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
