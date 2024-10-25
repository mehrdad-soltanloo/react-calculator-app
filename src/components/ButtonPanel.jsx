import React from "react";
import Button from "./Button"; // Make sure to import Button component

function ButtonPanel({ onClick, onEqual, onClear }) {
  return (
    <div className="buttons">
      {[...Array(10).keys()].map((num) => (
        <Button key={num} label={num.toString()} onClick={onClick} />
      ))}
      {["+", "-", "*", "/"].map((op) => (
        <Button key={op} label={op} onClick={onClick} />
      ))}
      <Button label="=" onClick={onEqual} />
      <Button label="C" onClick={onClear} />
    </div>
  );
}

export default ButtonPanel;
