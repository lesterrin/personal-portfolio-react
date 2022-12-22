import React from 'react';
import s from './home.module.css';
import profile from '../../assets/my-photo.jpg';

const Home = () => {
  return (
    <section className={s.home}>
      <div className={s.hero_content}>
        <h1 className={s.hero_heading}><span className={s.highlight}>Владимир</span> Шорин</h1>
        <p className={s.profession}>Младший веб-разработчик</p>
      </div>
      <div className={s.profile_photo}><img src={profile} /></div>
    </section>
  );
}

export default Home;
