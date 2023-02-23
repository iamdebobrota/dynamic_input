import React, { useState } from "react";

function DynamicInput() {
  const [selectedOp, setSelectedOp] = useState([]);
  const [types, setTypes] = useState("text");
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setSelectedOp([...selectedOp, types]);
  };

  const handleChange = (e) => {
    setTypes(e.target.value);
  };

  const handleRemove = () => {
    selectedOp.pop();
    setCount(count + 1); // for refresh the page only
    // setSelectedOp(selectedOp)
  };
  console.log(selectedOp);

  return (
    <div>
      {Array.from(selectedOp, (ele, i) => {
        return (
          <div key={i}>
            {selectedOp[i] === "text" && (
              <input type="text" placeholder="Text" />
            )}
            {selectedOp[i] === "number" && (
              <input type="number" placeholder="number" />
            )}
          </div>
        );
      })}

      <button onClick={handleClick}>Add Input</button>
      <button onClick={handleRemove}>remove Input</button>
      <select name="" id="" onChange={handleChange}>
        <option value="text" default>
          text
        </option>
        <option value="number">number</option>
      </select>
    </div>
  );
}

export default DynamicInput;
