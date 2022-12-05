import React from "react";
import s from './certs-list-item.module.css'

const CertsListItem = ({cert}) => {
    const {name,year,company,link} = cert;

    return(
        <div className={s.cert_card} >
            <a href={link} target="_blank">
                <div className={s.content}>
                    <h1 className={s.cert_name}>{name}</h1>
                    <div className={s.tags}>{year}</div>
                    <div className={s.tags}>{company}</div>
                </div>
            </a>
        </div>
    )
}

export default CertsListItem;
