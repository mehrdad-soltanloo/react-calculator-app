const Display = ({ currentInput, result }) => {
  return (
    <div className="display">
      {result !== null ? result : currentInput || "0"}
    </div>
  );
};
export default Display;
