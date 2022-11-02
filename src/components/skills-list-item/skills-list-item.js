import React from "react";
import './skills-list-item.css';

const SkillsListItem = (props) => {
    return(
        <div className="skill-card" >
            <p className="skill">{props.skill}</p>
        </div>
    )
}

export default SkillsListItem;
