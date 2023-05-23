import { addStyles, EditableMathField } from "react-mathquill";
import React from "react";
import axios from "axios";
import "../../assets/styles/DandI.css";
addStyles();

const DerivativeCalculator = () => {
  const [latex, setLatex] = React.useState(
    "\\frac{d}{dx}(sin\\left(x\\right))"
  );
  const [result, setResult] = React.useState("");

  const config = {
    spaceBehavesLikeTab: true,
    leftRightIntoCmdGoes: "up",
    restrictMismatchedBrackets: true,
    sumStartsWithNEquals: true,
    supSubsRequireOperand: true,
    charsThatBreakOutOfSupSub: "+-=<>",
    autoSubscriptNumerals: true,
    autoCommands: "pi theta sqrt sum",
    autoOperatorNames: "sin cos tan csc sec cot",
    maxDepth: 10,
  };
  const handleSubmit = async () => {
    const url = "https://web-production-5eba.up.railway.app/derivative";
    const response = await axios.post(url, {
      function: latex,
    });
    const data = await response.data;
    setResult(data);
  };
  return (
    <div className="DandIcalculatorHome">
      <EditableMathField
        style={{ fontSize: "2rem" }}
        config={config}
        className="emDandI"
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex());
        }}
      />

      <button onClick={handleSubmit} className="btnDandI">
        DERIVATIVE
      </button>

      <h1>{result["msg"]}</h1>
    </div>
  );
};

export default DerivativeCalculator;
