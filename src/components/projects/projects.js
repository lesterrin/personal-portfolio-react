import React from 'react';
import './projects.css';

const Projects = () => {
    return(
        <section className="project" id="project-section">
            <h2 className="heading">Проект<span className="highlight">ы</span></h2>
            <p className="sub-heading">Lorem ipsum dolor sit amet consectetur. </p>
            <div className="seperator"></div>
            <div className="filters">
                <button className="filter-btn active" id="all">all</button>
                <button className="filter-btn" id="work">Рабочие</button>
                <button className="filter-btn" id="edu">Учебные</button>
            </div>
            <div className="project-container">
            </div>
        </section>
    );
}

export default Projects;
