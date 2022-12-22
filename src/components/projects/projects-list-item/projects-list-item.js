import React from 'react';
import s from './projects-list-item.module.css';
import ghlogo from '../../../assets/github-grise.png';
import linklogo from '../../../assets/link.png'

const ProjectsListItem = (props) => {
  const {name, type, link, reposLink, stack, description} = props;
  return (
    <div className={s.project_card}>
      <div className={s.title}>
        <div className={s.project_name}>{name}</div>
        <div className={s.project_type}>{type}</div>
      </div>
      <div className={s.links}><a href={link} target='_blank'><img src={linklogo} /></a>
        {reposLink ? <a href={reposLink} className={s.tags} target='_blank'><img src={ghlogo} /></a> : null}
      </div>
      <div className={s.content}>
        <div>{description}</div>
      </div>
      <div className={s.stack}>{stack}</div>
    </div>
  );
}

export default ProjectsListItem;
