import React from 'react';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="header">
      <ul>
        <li><a>Mission</a></li>
        <li><a>Launches</a></li>
        <li><a>Rockets</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  );
}
