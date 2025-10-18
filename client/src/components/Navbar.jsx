import React from "react";
import "../styles/globals.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="top-nav">
        <div className="contact">
          <p>+998 93 085 0955</p>
          <p>deepcodeacademy@gmail.com</p>
        </div>
        <div className="address">
          <p>Navoiy Uzbekistan</p>
        </div>
      </div>
      <nav>
        <div className="logo">
          <h1>
            <span>DEEP</span>CODE
          </h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
