import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className="homelayoutul">
          <li className="navli">
            <NavLink className="link " activeClassName="active" to="derivative">
              DERIVATIVE
            </NavLink>
          </li>
          <li className="navli">
            <NavLink className="link" activeClassName="active" to="integrate">
              INTEGRATION
            </NavLink>
          </li>
          <li className="navli">
            <NavLink className="link" activeClassName="active" to="midpoint">
              MIDPOINT
            </NavLink>
          </li>
          <li className="navli">
            <NavLink className="link" activeClassName="active" to="trapezoid">
              TRAPEZOID
            </NavLink>
          </li>
          <li className="navli">
            <NavLink className="link" activeClassName="active" to="simpson">
              SIMPSON
            </NavLink>
          </li>
          <li className="navli">
            <NavLink className="link" activeClassName="active" to="report">
              REPORT{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
