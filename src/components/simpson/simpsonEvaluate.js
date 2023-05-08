import React, { useState } from "react";
import { addStyles, EditableMathField } from "react-mathquill";
import axios from "axios";
import "../../assets/styles/mts.css";

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles();

const SimpsonEvaluate = () => {
  const [latex, setLatex] = useState("\\int_1^2\\frac{1}{1+x^6}dx");
  const [interval, setInterval] = useState();
  const [k, setK] = useState("");
  const [result, setResult] = useState("NO RESULT");
  const [result1, setResult1] = useState("NO RESULT");
  const [result2, setResult2] = useState("NO RESULT");
  const [result3, setResult3] = useState("NO RESULT");
  const [error, setError] = useState();

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
  const handlesubmit = async () => {
    const url = "https://web-production-5eba.up.railway.app/simpson";

    const response = await axios.post(url, {
      function: latex,

      interval: interval,
    });
    const data = await response.data;
    setResult(data);
  };
  const handlesubmit1 = async () => {
    const url1 = "https://web-production-5eba.up.railway.app/simpsonFbound";
    const response = await axios.post(url1, {
      function: latex,
    });
    const data = await response.data;
    console.log(data);
    setResult1(data);
  };
  const handlesubmit2 = async () => {
    const url1 = "https://web-production-5eba.up.railway.app/simpsonError";
    const response = await axios.post(url1, {
      function: latex,

      interval: interval,
      k: k,
    });
    const data = await response.data;
    console.log(data);
    setResult2(data);
  };
  const handlesubmit3 = async () => {
    const url1 = "https://web-production-5eba.up.railway.app/simpsonInterval";
    const response = await axios.post(url1, {
      function: latex,
      k: k,
      error: error,
    });
    const data = await response.data;
    console.log(data);
    setResult3(data);
  };
  return (
    <>
      <div className="calculatorHome">
        {/* ======================================================================================================================= */}
        <section className="section1">
          <h1 className="methodText">SIMPSON EVALUATE</h1>

          <EditableMathField
            style={{ fontSize: "2rem" }}
            config={config}
            className="em"
            latex={latex}
            onChange={(mathField) => {
              setLatex(mathField.latex());
            }}
          />

          <input
            type="text"
            id="interval"
            className="input"
            placeholder="interval"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
          ></input>
          <button onClick={handlesubmit} className="Eval">
            CALCULATE
          </button>
          <h1>{result["msg"]}</h1>
        </section>
        {/* ======================================================================================================== */}
        <section className="section2">
          <h1 className="methodText">F BOUND</h1>
          <EditableMathField
            style={{ fontSize: "2rem" }}
            config={config}
            className="em"
            latex={latex}
            onChange={(mathField) => {
              setLatex(mathField.latex());
            }}
          />
          <button onClick={handlesubmit1} className="Eval">
            CALCULATE
          </button>
          <h1>{result1["msg"]}</h1>
        </section>
        {/* ======================================================================================================= */}
        <section className="section3">
          <h1 className="methodText">ERROR ESTIMATE</h1>
          <EditableMathField
            style={{ fontSize: "2rem" }}
            config={config}
            className="em"
            latex={latex}
            onChange={(mathField) => {
              setLatex(mathField.latex());
            }}
          />
          <input
            type="text"
            id="interval"
            className="input"
            placeholder="interval"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
          ></input>
          <input
            type="text"
            id="k"
            className="input"
            placeholder="k value"
            value={k}
            onChange={(e) => setK(e.target.value)}
          ></input>
          <button onClick={handlesubmit2} className="Eval34">
            CALCULATE
          </button>
          <h1>{result2["msg"]}</h1>
        </section>
        {/* ============================================================================================================== */}
        <section className="section4">
          <h1 className="methodText">NUMBER OF INTERVALS</h1>
          <EditableMathField
            style={{ fontSize: "2rem" }}
            config={config}
            className="em"
            latex={latex}
            onChange={(mathField) => {
              setLatex(mathField.latex());
            }}
          />

          <input
            type="text"
            id="k"
            className="input"
            placeholder="k value"
            value={k}
            onChange={(e) => setK(e.target.value)}
          ></input>
          <input
            type="text"
            id="error"
            className="input"
            placeholder="error"
            value={error}
            onChange={(e) => setError(e.target.value)}
          ></input>
          <button onClick={handlesubmit3} className="Eval34">
            CALCULATE
          </button>
          <h1>{result3["msg"]}</h1>
        </section>
      </div>
    </>
  );
};

export default SimpsonEvaluate;
