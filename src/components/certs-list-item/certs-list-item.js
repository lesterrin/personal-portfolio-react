import React from "react";
import './certs-list-item.css'

const CertsListItem = (props) => {
    console.log(props);
    const {name, link} = props;
    return(
        <div className="cert-card" >
            <a href={link} target="_blank">
                <div className="content">
                    <h1 className="cert-name">{name}</h1>
                </div>
            </a>
        </div>
    )
}

export default CertsListItem;
