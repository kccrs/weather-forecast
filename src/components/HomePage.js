import React from 'react';
import { Link } from 'react-router';
import CityShortForecast from './CityShortForecast';

const Home = ({ value }) => {
  return (
    <section id="HomePage">
      <div className="CityContainer">
        <CityShortForecast />
        <CityShortForecast />
        <article className="PinNewCity">
          <Link to="/Settings" className="">+ Pin another city</Link>
        </article>
      </div>
      <section className="EditLink">
        <Link to="/Settings" className="EditCities">Edit Pinned Cities >> </Link>
      </section>
    </section>
  )
}

export default Home;
