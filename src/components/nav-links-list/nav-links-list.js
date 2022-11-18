import React from "react";
import './nav-links-list.css'

const NavLinksList = (activeSection) => {
    return (
        <ul className="links-container">
            <li key = {21} className="links-item"><a href="#" className="link active">Главная</a></li>
            <li key = {22} className="links-item"><a href="#about-section" className="link">Обо мне</a></li>
            <li key = {23} className="links-item"><a href="#project-section" className="link">Проекты</a></li>
        </ul>
    );
}

export default NavLinksList;
