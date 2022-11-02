import React from 'react';
import './projects.css';
import ProjectsListItem from '../projects-list-item';

const projects = [ //вынести в отдельный файл
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
        link: "https://react-todo-list-nine-smoky.vercel.app/"
    },
    ,
    {
        name: "star-db",
        type: "#учебный",
        link: "https://react-star-db.vercel.app/"
    }
]

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
