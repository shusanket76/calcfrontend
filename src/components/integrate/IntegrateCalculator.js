import { addStyles, EditableMathField } from "react-mathquill";
import React, { useState } from "react";
import axios from "axios";
import "../../assets/styles/DandI.css";
addStyles();

const IntegrateCalculator = () => {
  const [latex, setLatex] = React.useState("\\int_{ }^{ }\\frac{1}{1+x^2}dx");
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    setLoading(true);
    setSuccess(false);
    const url = "https://web-production-025a.up.railway.app/integration";
    const response = await axios.post(url, {
      function: latex,
    });
    const data = await response.data;
    setResult(data);
    setLoading(false);
    setSuccess(true);
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
        INTEGRATE{" "}
      </button>
      {loading && <h1>LOADING..</h1>}
      {success && <h1>{result["msg"]}</h1>}
    </div>
  );
};

export default IntegrateCalculator;
