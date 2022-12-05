import React from 'react';
import './projects.css';
import ProjectsListItem from './projects-list-item';
import {projects} from '../pseudo-db';

const Projects = () => {

    const items = projects.map((item) => {
        return  <ProjectsListItem {...item} />
    });

    return(
        <section className="project" id="project-section">
            <h2 className="heading">Проект<span className="highlight">ы</span></h2>
            <div className="seperator"></div>
            <div className="project-container">
                {items}
            </div>
        </section>
    );
}

export default Projects;
