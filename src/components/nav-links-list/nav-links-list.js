import React from 'react';
import './nav-links-list.css'

const NavLinksList = () => {

  const onLinkClick = (e) => {
    console.log(e);
    document.querySelectorAll('.link').forEach(ele => ele.classList.remove('active'));
    e.target.classList.add('active');
  }

  return (
    <ul className="links-container">
      <li className="links-item"><a onClick={(e) => onLinkClick(e)} href="#" className="link active">Главная</a></li>
      <li className="links-item"><a onClick={(e) => onLinkClick(e)} href="#about-section" className="link">Обо мне</a>
      </li>
      <li className="links-item"><a onClick={(e) => onLinkClick(e)} href="#project-section" className="link">Проекты</a>
      </li>
    </ul>
  );
}

export default NavLinksList;
