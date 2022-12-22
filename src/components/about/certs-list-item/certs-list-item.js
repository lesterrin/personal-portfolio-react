import React from 'react';
import s from './certs-list-item.module.css'
import linklogo from '../../../assets/link.png'

const CertsListItem = ({cert}) => {
  const {name, year, company, link} = cert;

  return (
    <div className={s.cert_card}>
      <a href={link} class={s.link} target="_blank"><img src={linklogo} /></a>
      <div className={s.cert_name}>{name}</div>
      <br />
      <div className={s.tags}>Год получения: {year}</div>
      <div className={s.tags}>Организация: {company}</div>
    </div>
  )
}

export default CertsListItem;
