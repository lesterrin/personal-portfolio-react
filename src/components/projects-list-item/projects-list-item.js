import React from "react";
import './projects-list-item.css'

const ProjectsListItem = (props) => {
    const {name, type, link} = props;
    return(
        <div key={name} className="project-card" >
            <a href={link}>
                <div className="content">
                    <h1 className="project-name">{name}</h1>
                    <span className="tags">{type}</span>
                </div>
            </a>
        </div>
    );
}

export default ProjectsListItem;
