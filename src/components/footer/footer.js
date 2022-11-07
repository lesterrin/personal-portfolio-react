import React from "react";
import './footer.css';
import react_logo from '../../assets/react-logo.png';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="developed">
                <div className="head">Разработано c использованием React</div>
                <div className="source-link"><a href='https://github.com/lesterrin/personal-portfolio-react'>Ссылка на репозиторий</a></div>
                <div className="logo"><img height={50} src={react_logo}/></div>
            </div>
        </div>
    );
}

export default Footer;
