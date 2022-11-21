import React from 'react';
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar";

function Header() {

  return (
    <header className="flex-row header">
      <div className="logo">
        <h1>
        <Link to="/">Holly Hoffman</Link>
        </h1>
      </div>
      <NavBar></NavBar>
    </header>
  );
}

export default Header;