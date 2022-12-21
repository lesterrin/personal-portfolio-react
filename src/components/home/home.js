import React from 'react';
import './home.css';
import profile from '../../assets/my-photo.jpg';

const Home = () => {
  return (
    <section className="home">
      <div className="hero-content">
        <h1 className="hero-heading"><span className="highlight">Владимир</span> Шорин</h1>
        <p className="profession">Младший веб-разработчик</p>
      </div>
      <div className="profile-photo"><img src={profile} /></div>
    </section>
  );
}

export default Home;
