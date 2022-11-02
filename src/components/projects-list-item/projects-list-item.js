import React from "react";
import './projects-list-item.css'

const ProjectsListItem = (props) => {
    const {name, type, link} = props;
    return(
        <div className="project-card" >
            <a href={link} target="_blank">
                <div className="content">
                    <h1 className="project-name">{name}</h1>
                    <span className="tags">{type}</span>
                </div>
            </a>
        </div>
    );
}

export default ProjectsListItem;
