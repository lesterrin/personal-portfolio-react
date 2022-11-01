import React from 'react';
import './projects.css';
import ProjectsListItem from '../projects-list-item';

const projects = [
    {
        name: "Комсомольский-на-Амуре городской архив",
        type: "#рабочий",
        link: "https://archive.kmscity.ru/"
    },
    {
        name: "Портал «Наш Комсомольск»",
        type: "#рабочий",
        link: "https://gorod.kmscity.ru/"
    },
    {
        name: "to-do list",
        type: "#учебный",
        link: "https://vs-todo-list.herokuapp.com/"
    },
    ,
    {
        name: "star-db",
        type: "#учебный",
        link: "https://vs-star-db.herokuapp.com/"
    }
]

const Projects = () => {

    const items = projects.map((item) => {
        return <ProjectsListItem {...item} />
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
