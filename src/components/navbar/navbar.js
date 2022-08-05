import React from 'react';
import './navbar.css';
import ghlogo from '../../assets/github-grise.png';
import linkedinlogo from '../../assets/linkedin-logo.png';
import tglogo from '../../assets/tg-logo.png';

const Navbar = () => {

    return(
            <nav className="navbar">
                <div className="social-container">
                    <a href="https://github.com/lesterrin"><img src={ghlogo}/></a>
                    <a href="https://www.linkedin.com/in/vs-rin/"><img src={linkedinlogo}/></a>
                    <a href="https://telegram.me/vs_rin"><img src={tglogo}/></a>
                    <a className="pseudo-link" href="mailto:voldemar1810gmail.com">voldemar1810gmail.com</a>
                </div>
                <ul className="links-container">
                    <li className="links-item"><a href="#" className="link active">Главная</a></li>
                    <li className="links-item"><a href="#about-section" className="link">Обо мне</a></li>
                    <li className="links-item"><a href="#project-section" className="link">Проекты</a></li>
                </ul>
            </nav>
    );
}

export default Navbar;
