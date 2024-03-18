import React from "react";

import logo from "./img/trp-logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="pos-fix">
      <nav className="navbar bg-body-tertiary ">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 title">
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
