import React from "react";
import Link from "gatsby-link";
import {Helmet} from "react-helmet";
import Copyright from "react-copyright";

let date = new Date();

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: `0 auto`, padding: `1.25rem 1rem` }}>
    <Helmet>
      <title>ellen.chen</title>
      <link rel="icon"
            type="image/png"
            href="https://i.imgur.com/T0ZgtLH.png"
      />
    </Helmet>
    <header style={{ marginBottom: `1.5rem`, alignSelf:`center`, textAlign:`center`, justifyContent: `center`}}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>ellen.chen</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/portfolio/">Portfolio</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      <hr style={{height: `5`, marginTop: `10`}}/>
    </header>
    {children()}

    <footer>
      <hr style={{height: `5`}}/>
      <div style={{display:`flex`, justifyContent: `center`}}>
        <Copyright>Ellen Chen</Copyright>
        <br/>
        <ul style={{ listStyle: `none` }}>
          <li style={{display: `inline`, marginRight: `20`}}>
            <a href="https://github.com/BlackSpade741">Github</a>
          </li>
          <li style={{display: `inline`}}>
            <a href="https://linkedin.com/in/ellenyufeichen/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
)