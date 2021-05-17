import React, { useState } from "react";
import './UserInput.css';

function UserInput({ handleSubmit }) {
  const [input, setInput] = useState(0);
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleClick = () => {
    handleSubmit(input);
    setInput(0);
  };
  return (
    <div className="userInput">
      <input
        type="text"
        pattern="[0-9]*"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Draw Cards!</button>
    </div>
  );
}

export default UserInput;
