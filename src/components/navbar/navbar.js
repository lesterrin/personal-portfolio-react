import React from 'react';
import NavLinksList from './nav-links-list';
import s from'./navbar.module.css';
import ghlogo from '../../assets/github-grise.png';
import linkedinlogo from '../../assets/linkedin-logo.png';
import tglogo from '../../assets/tg-logo.png';

const Navbar = () => {

  return (
    <nav className={s.navbar}>
      <div className={s.social_container}>
        <a href="https://github.com/lesterrin"><img src={ghlogo} /></a>
        <a href="https://www.linkedin.com/in/vs-rin/"><img src={linkedinlogo} /></a>
        <a href="https://telegram.me/vs_rin"><img src={tglogo} /></a>
        <a href="https://www.codewars.com/users/lesterrin"><img
          src="https://www.codewars.com/users/lesterrin/badges/micro" /></a>
        <a className={s.pseudo_link} href="mailto:voldemar1810gmail.com">voldemar1810gmail.com</a>
      </div>
      <NavLinksList />
    </nav>
  );
}

export default Navbar;
