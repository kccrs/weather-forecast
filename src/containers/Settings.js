import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';


export default class Settings extends Component {
  render() {
    return (
      <section id="Settings">
        <h2>Pinned Cities: </h2>
        <article className="city">City One</article>
        <article className="city">City Two</article>
        <article className="city">City Three</article>

        // <Link to="/ExtendedForecast">Go to Extended Forecast</Link>
        <button className="LinkToHome" onClick="handleClick()">
          <Link to="/">Go to Home Page</Link>
        </button>
      </section>
    )
  }
}
