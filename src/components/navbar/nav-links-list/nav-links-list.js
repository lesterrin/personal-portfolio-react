import React from 'react';
import s from './nav-links-list.module.css'

const NavLinksList = () => {

  const onLinkClick = (e) => {
    document.querySelectorAll(`.${s.link}`).forEach(el => el.classList.remove(s.active));
    e.target.classList.add(s.active);
  }

  return (
    <ul className={s.links_container}>
      <li><a onClick={(e) => onLinkClick(e)} href="#" className={`${s.link} ${s.active}`}>Главная</a></li>
      <li><a onClick={(e) => onLinkClick(e)} href="#about-section" className={s.link}>Обо мне</a></li>
      <li><a onClick={(e) => onLinkClick(e)} href="#project-section" className={s.link}>Проекты</a></li>
    </ul>
  );
}

export default NavLinksList;
