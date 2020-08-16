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
          <h4 data-testid="spaceX">SpaceX</h4>
          <h1 data-testid="starLink">STARLINK MISSION</h1>
          <button className="btn" data-testid="explore"> Explore </button>
        </div>
      </section>   
    </div>
    </>
  );
}
