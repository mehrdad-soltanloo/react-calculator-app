import React, { useState } from "react";
import Display from "./Display"; // Import the Display component
import ButtonPanel from "./ButtonPanel"; // Import the ButtonPanel component
import { evaluate } from "mathjs";
import { GoSun, GoMoon } from "react-icons/go";

function Calculator() {
  const [currentInput, setCurrentInput] = useState("");
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Function to handle number and operator clicks
  const handleButtonClick = (value) => {
    if (result !== null) {
      if (!isNaN(value)) {
        setCurrentInput(value); // Start a new number if it's a number
      } else {
        setCurrentInput(result + value); // Continue with the result if it's an operator
      }
      setResult(null); // Reset result after using it
    } else {
      // Standard behavior: Prevent consecutive operators
      if (isNaN(value) && isNaN(currentInput.slice(-1))) return;
      setCurrentInput((prev) => prev + value);
    }
  };

  // Function to handle the equals button
  const handleEqual = () => {
    try {
      const evalResult = evaluate(currentInput);
      setResult(evalResult);
      setCurrentInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  // Function to clear the calculator input
  const handleClear = () => {
    setCurrentInput("");
    setResult(null);
  };

  // Function to toggle dark and light modes
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`calculator ${darkMode ? "dark" : "light"}`}>
      <div className="toggle-container">
        <span onClick={toggleTheme}>
          {darkMode ? (
            <GoSun className="toggle-btn" />
          ) : (
            <GoMoon className="toggle-btn" />
          )}
        </span>
      </div>
      <Display currentInput={currentInput} result={result} />
      <ButtonPanel
        onClick={handleButtonClick}
        onEqual={handleEqual}
        onClear={handleClear}
      />
    </div>
  );
}

export default Calculator;
