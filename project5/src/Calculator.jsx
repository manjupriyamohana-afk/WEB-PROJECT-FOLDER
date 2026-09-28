import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input === "0" ? value : input + value);
  };

  const handleDelete = () => {
    setInput(input.length === 1 ? "" : input.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">

      <div className="display">
        {input === "" ? "0" : input}
      </div>

      <div className="buttons">

        <button onClick={handleClear} className="operator">
          AC
        </button>

        <button onClick={handleDelete} className="operator">
          DEL
        </button>

        <button
          onClick={() => handleClick("%")}
          className="operator"
        >
          %
        </button>

        <button
          onClick={() => handleClick("/")}
          className="operator"
        >
          ÷
        </button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>

        <button
          onClick={() => handleClick("*")}
          className="operator"
        >
          ×
        </button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>

        <button
          onClick={() => handleClick("-")}
          className="operator"
        >
          −
        </button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>

        <button
          onClick={() => handleClick("+")}
          className="operator"
        >
          +
        </button>

        <button
          onClick={() => handleClick("0")}
          className="zero"
        >
          0
        </button>

        <button onClick={() => handleClick(".")}>
          .
        </button>

        <button
          onClick={handleCalculate}
          className="equal"
        >
          =
        </button>

      </div>
    </div>
  );
}

export default Calculator;