import React from "react";
import './certs-list-item.css'

const CertsListItem = ({cert}) => {
    const {name,year,company,link} = cert;

    return(
        <div className="cert-card" >
            <a href={link} target="_blank">
                <div className="content">
                    <h1 className="cert-name">{name}</h1>
                    <span className="tags">{year}</span>
                    <br/>
                    <span className="tags">{company}</span>
                </div>
            </a>
        </div>
    )
}

export default CertsListItem;
