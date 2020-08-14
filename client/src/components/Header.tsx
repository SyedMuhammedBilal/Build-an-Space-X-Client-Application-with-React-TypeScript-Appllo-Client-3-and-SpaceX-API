import React from 'react';

import "./Header.css";

import Navbar from './Navbar';

export default function Header() {
  return (
    <>
      <Navbar />
    <div>
      <section className="site-title">
        <div className="site-background">
          <h4>SpaceX</h4>
          <h1>STARLINK MISSION</h1>
          <button className="btn"> Explore </button>
        </div>
      </section>   
    </div>
    </>
  );
}
