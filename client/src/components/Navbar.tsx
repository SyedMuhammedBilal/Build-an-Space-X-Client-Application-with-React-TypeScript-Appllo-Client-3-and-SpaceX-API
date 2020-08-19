import React from 'react';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="header">
      <ul>
        <li><a href="/dragons">Dragons</a></li>
        <li><a href="/">Launches</a></li>
        <li><a href="/ships">Ships</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
  );
}
