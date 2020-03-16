import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function InputBar({ history }) {
  const [value, setValue] = useState("");

  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    history.push(`/${value}`);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="heading text-center">My Github Resume</h1>
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <Input
                value={value}
                handleInput={handleInput}
                label="Github Username"
              />
              <Button
                onHandleClick={handleClick}
                buttonText="Generate"
                isDisable={!value ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
