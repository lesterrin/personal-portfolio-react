import React from 'react';
import './home.css';
import profile from '../../assets/test-img-300x194_2.png';

const Home = () => {
    return(
        <section className="home">
            <div className="hero-content">
                <h1 className="hero-heading"><span className="highlight">Владимир</span> Шорин</h1>
                <p className="profession">Младший веб-разработчик</p>
            </div>
            <img src={profile} className="image" />
        </section>
    );
}

export default Home;
