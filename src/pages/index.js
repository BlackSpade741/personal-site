import React from "react";
import RightFloatingContainer from "../components/rightFloatingContainer";
import LeftFloatingContainer from "../components/leftFloatingContainer";
import Link from "gatsby-link";

export default () => (
  <div>
    <h1>Hello, my name is Ellen.</h1>
    <h4>I study Computer Science at the University of Toronto.</h4>
    <RightFloatingContainer>

    </RightFloatingContainer>
    <LeftFloatingContainer>
      <h2>What am I up to?</h2>
      <ul>
        <li>Enjoying my summer in beautiful Vancouver, Canada</li>
        <li><Link to="/about/" style={{ textShadow: `none`, backgroundImage: `none` }}>Working for Avigilon as a Software Developer intern</Link></li>
      </ul>
    </LeftFloatingContainer>
  </div>
);