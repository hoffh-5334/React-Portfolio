import React from 'react';
import { Link } from "react-router-dom";
import Portrait from "../assets/images/headshot2.jpg";

function Home() {
  return (
    <section className="home home-page">
      <div className="title">
        <h2>Hi, I'm Holly</h2>
        <p>Welcome to my Portfolio!</p>
        <Link to="portfolio">
          <button>My Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
      </div>
    </section>
  );
}

export default Home;