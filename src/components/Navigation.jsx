import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archive">Arsip</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
