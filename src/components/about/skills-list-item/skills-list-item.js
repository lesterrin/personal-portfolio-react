import React from 'react';
import s from './skills-list-item.module.css';

const SkillsListItem = (props) => {
  return (
    <div className={s.skill_card}>
      <div className={s.icon}><i className={props.img}></i></div>
      <div className={s.skill}>{props.title}</div>
    </div>
  )
}

export default SkillsListItem;
