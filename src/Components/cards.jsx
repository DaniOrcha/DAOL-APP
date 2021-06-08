

import React, { useCallback } from 'react'

import { Link } from "react-router-dom";


export function Card(props) {

    return (
        <Link to={props.link} className="frames">
            <img src={props.src} alt="err" className="image card" />
            <h2>{props.tittle}</h2>
            <h4>{props.description}</h4>
        </Link>
    );

}

export function CardRef(props) {

    return (
        <a href={props.link} className="frames" rel="noreferrer noopener" target="_blank">
            <img src={props.src} alt="err" className="image card" />
            <h2>{props.tittle}</h2>
            <h4>{props.description}</h4>
        </a>
    );
}


export function ImgWithDescription(props) {
    return (
        <div className="ImgeWhitDescription">
            <img src={props.src} alt="err" className="image description" />
            {props.description}
        </div>
    );
}


export function BlockProyect(dJson) {

    const refDesc = useCallback(node => {
        if (node !== null) {
            for (let i = 0; i < dJson.desc.length; i++) {
                node.innerHTML += "<h4>" + dJson.desc[i] + "</h4>";
            }
        }
    }, [dJson]);

    return (
        <div className="flex center">
            <div className="boxHorizontal">
                <div className="TxtColor">
                    <h3>{dJson.title}</h3>
                </div>
                <ImgWithDescription
                    src={dJson.img.src}
                    description={dJson.img.description}
                />
                <div ref={refDesc} >
                </div>
            </div>

        </div>
    );
}






/* <div className="boxHorizontal">
<div className="TxtColor">
    <h3>Estación de paletizado con Robot Kuka 2400/10:</h3></div>
<ImgWithDescription
    src="../resources/portfolio/robotkuka.PNG"
    description="Croquis estación robotizada"
/>
<h4>Proyecto para una instalación robotizada de selección y paletizado de cajas.</h4>
</div> */