import React from 'react';
import './about.css';

const About = () => {
    return(
        <section className="about" id="about-section">
            <h2 className="heading">Обо <span className="highlight">мне</span></h2>
            <div className="seperator"></div>
            <div className="about-me-container">
                <div className="left-col">
                    <div><span className="highlight">Имя:</span> Владимир Шорин</div>
                    <div><span className="highlight">Возраст:</span> 25 лет</div>
                    <div><span className="highlight">Желаемая должность:</span> Junior Frontend/React developer</div>
                </div>
                <div className="right-col">
                    <p className="about-para">Привет. На данный момент я занимаю должность веб-разработчика (fullstack)
                        в администрации города.
                        Занимаюсь разработкой и сопровождением сайтов в ведомстве муниципалитета.
                        Изучаю React.JS. Нахожусь в активном поиске работы младшим фронтенд-разработчиком</p>
                    <a href="https://komsomolsk-na-amure.hh.ru/resume/7c253d83ff082017400039ed1f754b6d536969"
                       className="btn">Резюме</a>
                </div>
            </div>
            <h2 className="heading">Сертификаты</h2>
            <div className="seperator"></div>
            <h2 className="heading">Навыки</h2>
            <div className="seperator"></div>
            <div className="skill-container">
                <div className="skill-card" >
                    <p className="skill">HTML</p>
                </div>
                <div className="skill-card">
                    <p className="skill">CSS</p>
                </div>
                <div className="skill-card">
                    <p className="skill">MODX Revolution</p>
                </div>
                <div className="skill-card">
                    <p className="skill">MySQL</p>
                </div>
                <div className="skill-card">
                    <p className="skill">JavaScript</p>
                </div>
                <div className="skill-card">
                    <p className="skill">PHP</p>
                </div>
                <div className="skill-card">
                    <p className="skill">ReactJS</p>
                </div>
                <div className="skill-card">
                    <p className="skill">Bootstrap</p>
                </div>
            </div>
        </section>
    );
}

export default About;
