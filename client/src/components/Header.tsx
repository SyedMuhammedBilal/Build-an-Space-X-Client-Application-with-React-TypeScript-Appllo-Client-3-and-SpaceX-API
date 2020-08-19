import React from 'react';

import "./Header.css";

import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Navbar />
    <div>
      <section className="site-title">
        <div className="site-background">
          <h4 data-testid="spaceX">SpaceX</h4>
          <h1 data-testid="starLink">STARLINK MISSION</h1>
          <Link to="/" className="btn" data-testid="explore"> Explore </Link>
        </div>
      </section>   
    </div>
    </>
  );
}
