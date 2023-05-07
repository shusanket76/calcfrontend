import React from "react";
import IntegrateCalculator from "./IntegrateCalculator";
import IntegrateIntroduction from "./IntegrateIntroduction";
import "../../assets/styles/common.css";

const IntegrateHome = () => {
  const [calculator, setCalculator] = React.useState(true);
  const [introduction, setIntroduction] = React.useState(false);
  const [calculatorActive, setcalculatorActive] = React.useState(true);
  const [introductionActive, setintroductionActive] = React.useState(false);

  return (
    <>
      <div className="home">
        <h1 className="firstTitle">INTEGRATION</h1>
        <div className="buttonContainer">
          <button
            className={
              calculatorActive ? `twoButtonTOP active` : `twoButtonTOP`
            }
            onClick={() => {
              setCalculator(true);
              setIntroduction(false);
              setcalculatorActive(true);
              setintroductionActive(false);
            }}
          >
            CALCULATOR
          </button>
          <button
            className={
              introductionActive ? `twoButtonTOP active` : `twoButtonTOP`
            }
            onClick={() => {
              setCalculator(false);
              setIntroduction(true);
              setcalculatorActive(false);
              setintroductionActive(true);
            }}
          >
            HOW TO
          </button>
        </div>
        {calculator && <IntegrateCalculator />}
        {introduction && <IntegrateIntroduction />}
      </div>
    </>
  );
};

export default IntegrateHome;
