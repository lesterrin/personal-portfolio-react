import React from "react";
import s from './projects-list-item.module.css';
import ghlogo from '../../../assets/github-grise.png';

const ProjectsListItem = (props) => {
    const {name, type, link, reposLink, stack, description} = props;
    return(
        <div className={s.project_card} >
                <div className={s.content}>
                    <h1 className={s.project_name}>{name}</h1>
                    <div className={s.tags}>{type}</div>
                    <div>{description}</div>
                    <div>{stack}</div>
                    <div><a href={link} className={s.tags}>Продакшн</a></div>
                    {reposLink ? <div><a href={reposLink} className={s.tags}><img src={ghlogo}/></a></div> : null}
                </div>
        </div>
    );
}

export default ProjectsListItem;
