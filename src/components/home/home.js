import React from 'react';
import s from './home.module.css';
import profile from '../../assets/my-photo.jpg';

const Home = () => {

    const exp = Math.floor((new Date() - new Date('7/31/2020')) / 1000 / 60 / 60 / 24 / 365);

    return (
        <section className={s.home}>
            <div className={s.hero_content}>
                <h1 className={s.hero_heading}><span className={s.highlight}>Владимир</span> Шорин</h1>
                {/*<p className={s.profession}>Frontend (React) разработчик</p>*/}
                <br/>
                <p className={s.about_text}>Привет. Я фронтенд-разработчик с {exp}+ годами опыта работы.
                    В поиске вакансии на полный или частичный рабочий день или стажировки в удаленном формате.
                    <br/>Город проживания: Комсомольск-на-Амуре (МСК +7).
                    <br/>Готов рассмотреть переезд в г. Хабаровск.</p>
                <a href="https://drive.google.com/file/d/1OgpsAegJ5XZnSHYqWcELuVbkB2NopiiJ/view"
                   className={s.btn} target="_blank">Резюме</a>
            </div>
            <div className={s.profile_photo}><img src={profile}/></div>
        </section>
    );
}

export default Home;
