import React, { useRef, useEffect } from "react";

const Input = ({ value, handleInput, label }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="main-bar">
      <label htmlFor="name">
        <h4 className="card-title">{label}</h4>
        <input
          ref={inputRef}
          value={value}
          onChange={handleInput}
          type="text"
          placeholder="name"
          className="name-input"
          name="name"
        />
      </label>
    </div>
  );
};

export default Input;
