import React from "react";
import s from './footer.module.css';
import react_logo from '../../assets/react-logo.png';

const Footer = () => {
    return (
        <div className={s.footer_wrapper}>
            <div className={s.developed}>
                <div className={s.head}>Разработано c использованием React</div>
                <div className={s.source_link}><a href='https://github.com/lesterrin/personal-portfolio-react'>Ссылка на репозиторий</a></div>
                <div className={s.logo}><img height={50} src={react_logo}/></div>
            </div>
        </div>
    );
}

export default Footer;
