import React from 'react';
import s from './projects.module.css';
import ProjectsListItem from './projects-list-item';
import {projects} from '../pseudo-db';

const Projects = () => {

    const items = projects.map((item) => {
        return  <ProjectsListItem {...item} />
    });

    return(
        <section className={s.project} id="project-section">
            <h2 className="heading">Проекты</h2>
            <div className="seperator"></div>
            <div className={s.project_container}>
                {items}
            </div>
        </section>
    );
}

export default Projects;
