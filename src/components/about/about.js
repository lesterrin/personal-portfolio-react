import React from 'react';
import s from './about.module.css';
import SkillsListItem from "./skills-list-item";
import CertsListItem from "./certs-list-item";
import {certs, skills} from '../pseudo-db';

const About = () => {

    const skillsLIst = skills.map((item) => {
        return  <SkillsListItem {...item} />
    });

    const exp = Math.floor((new Date() - new Date('7/31/2020'))/1000/60/60/24/365);

    return(
        <section className={s.about} id="about-section">
            <h2 className={s.heading}>Обо мне</h2>
            <div className={s.seperator}></div>
            <div className={s.about_me_container}>
                <div className={s.left_col}>
                    <div><span className={s.highlight}>Имя:</span> Владимир Шорин</div>
                    <div><span className={s.highlight}>Возраст:</span> 26 лет</div>
                    <div><span className={s.highlight}>Желаемая должность:</span> Frontend (React) developer</div>
                    <div><span className={s.highlight}>Образование:</span> Высшее, Информационная безопасность автоматизированных систем</div>
                </div>
                <div className={s.right_col}>
                    <p className={s.about_text}>Привет. Я фронтенд-разработчик с {exp}+ годами опыта работы. В поиске вакансии на полный или частичный рабочий день или стажировки  в удаленном формате.
                        <br/>Город проживания: Комсомольск-на-Амуре (МСК +7).
                        <br/>Готов рассмотреть переезд в г. Хабаровск.</p>
                    <a href="https://komsomolsk-na-amure.hh.ru/resume/7c253d83ff082017400039ed1f754b6d536969"
                       className={s.btn} target="_blank">Резюме</a>
                </div>
            </div>
            <h2 className={s.heading}>Сертификаты</h2>
            <div className={s.seperator}></div>
            <div className={s.cert_container}>
                {certs.map(cert => <CertsListItem cert = {cert}/>)}
            </div>
            <h2 className={s.heading}>Навыки</h2>
            <div className={s.seperator}></div>
            <div className={s.skill_container}>
                {skillsLIst}
            </div>
        </section>
    );
}

export default About;
