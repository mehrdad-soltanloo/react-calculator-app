# React Calculator App

## Project Overview

This is a simple calculator application built with React and Vite. The calculator allows basic arithmetic operations (addition, subtraction, multiplication, and division) and uses React Icons for a theme toggle (dark/light mode). The project is broken down into multiple components for readability and maintainability, including `Button`, `ButtonPanel`, `Display`, and `Calculator`.

---

## Project Setup

### 1. Create a New React + Vite App

To set up the project, run the following commands:

```bash
# Create a new Vite app
npm create vite@latest my-calculator-app

# Navigate to the project directory
cd my-calculator-app

# Install dependencies
npm install
npm install react react-dom

# Start the development server
npm run dev


```

## Project Structure

The project is organized into several components as follows:

```css
src/
├── components/
│   ├── Button.jsx
│   ├── ButtonPanel.jsx
│   ├── Calculator.jsx
│   └── Display.jsx
├── App.jsx
└── index.css (or styles.css)
```

## Create the Components

- Button.jsx

```javascript
import React from "react";

const Button = ({ label, onClick }) => {
  return <button onClick={() => onClick(label)}>{label}</button>;
};

export default Button;
```

- ButtonPanel.jsx

```javascript
import React from "react";
import Button from "./Button";

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
```

- Display.jsx

```javascript
import React from "react";

const Display = ({ currentInput, result }) => {
  return (
    <div className="display">
      {result !== null ? result : currentInput || "0"}
    </div>
  );
};

export default Display;
```

- Calculator.jsx

```javascript
import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

function Calculator() {
  const [currentInput, setCurrentInput] = useState("");
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleButtonClick = (value) => {
    if (result !== null) {
      if (!isNaN(value)) {
        setCurrentInput(value);
      } else {
        setCurrentInput(result + value);
      }
      setResult(null);
    } else {
      if (isNaN(value) && isNaN(currentInput.slice(-1))) return;
      setCurrentInput((prev) => prev + value);
    }
  };

  const handleEqual = () => {
    try {
      const evalResult = eval(currentInput);
      setResult(evalResult);
      setCurrentInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setCurrentInput("");
    setResult(null);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`calculator ${darkMode ? "dark" : "light"}`}>
      <Display currentInput={currentInput} result={result} />
      <ButtonPanel
        onClick={handleButtonClick}
        onEqual={handleEqual}
        onClear={handleClear}
      />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Calculator;
```

- App.jsx

```javascript
import React from "react";
import Calculator from "./components/Calculator";
import "./index.css"; // Add the styles

function App() {
  return <Calculator />;
}

export default App;
```

## Running the App

After creating all the components, start the development server:

```bash
npm run dev
```

### Future Enhancements

1. CSS Styling: The current design lacks detailed CSS styling. You can add styles to index.css to improve the layout, especially for the grid buttons, dark/light mode, and transitions.

2. Responsive Design: Consider adding media queries to make the calculator mobile-friendly.

3. Keyboard Support: Allow users to input values via the keyboard for better accessibility.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your branch to your forked repository.
5. Open a pull request to the main branch of this repository.

> > Thank you for checking out Calculator App! I appreciate your time and interest in this project. Whether you're using the app, providing feedback, or contributing to the code, your support means a lot. I hope you find this project useful and inspiring for your own development journey.

Happy coding! 🙂
