import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/layout";
import DerivativeHome from "./components/derivative/DerivativeHome";
import IntegrateHome from "./components/integrate/IntegrateHome";
import MidPointHome from "./components/midpoint/MidPointHome";
import SimpsonHome from "./components/simpson/SimpsonHome";
import TrapezoidHome from "./components/trapezoid/TrapezoidHome";

import Report from "./components/report/Report";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* =========================================================== */}
            <Route path="derivative" element={<DerivativeHome />}></Route>
            {/* ================================================== */}
            <Route path="integrate" element={<IntegrateHome />}></Route>
            <Route path="midpoint" element={<MidPointHome />}></Route>
            {/* ===================================================== */}
            <Route path="trapezoid" element={<TrapezoidHome />}></Route>
            {/* =========================================================================== */}
            <Route path="simpson" element={<SimpsonHome />}></Route>
            <Route path="report" element={<Report />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
