import React from 'react';
import './about.css';
import SkillsListItem from "../skills-list-item";
import CertsListItem from "../certs-list-item";
import {certs, skills} from '../pseudo-db';

const About = () => {

    const skillsLIst = skills.map((item) => {
        return  <SkillsListItem skill = {item} />
    });

    return(
        <section className="about" id="about-section">
            <h2 className="heading">Обо <span className="highlight">мне</span></h2>
            <div className="seperator"></div>
            <div className="about-me-container">
                <div className="left-col">
                    <div><span className="highlight">Имя:</span> Владимир Шорин</div>
                    <div><span className="highlight">Возраст:</span> 26 лет</div>
                    <div><span className="highlight">Желаемая должность:</span> Junior Frontend/React developer</div>
                    <div><span className="highlight">Образование:</span> Высшее, Информационная безопасность автоматизированных систем</div>
                </div>
                <div className="right-col">
                    <p className="about-para">Привет. На данный момент я занимаю должность fullstack веб-разработчика
                        в администрации города Комсомольска-на-Амуре.
                        Занимаюсь разработкой и сопровождением сайтов в ведомстве муниципалитета.
                        Изучаю React.JS. Нахожусь в активном поиске работы младшим фронтенд-разработчиком.
                        Готов к переезду.</p>
                    <a href="https://komsomolsk-na-amure.hh.ru/resume/7c253d83ff082017400039ed1f754b6d536969"
                       className="btn" target="_blank">Резюме</a>
                </div>
            </div>
            <h2 className="heading">Сертификаты</h2>
            <div className="seperator"></div>
            <div className="cert-container">
                {certs.map(cert => <CertsListItem cert = {cert}/>)}
            </div>
            <h2 className="heading">Навыки</h2>
            <div className="seperator"></div>
            <div className="skill-container">
                {skillsLIst}
            </div>
        </section>
    );
}

export default About;
