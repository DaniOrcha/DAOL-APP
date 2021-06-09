
import React, { useCallback } from 'react'
import { Link } from "react-router-dom";
import { imageZoom } from '../Functions/lens.js';


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



function ImgWithZoom(props) {
    const id = props.id;
    const icoLens = "../resources/lensico.png";
    return (
        <div className="lensContainer" onMouseEnter={() => { imageZoom({ id }); }}>
            <img id={props.id} src={props.srcImg} className={props.class} alt="err" />
            <img src={icoLens} className="lensIco" alt="err" />
        </div>
    )
}


export function BlockProyect2sideAndLens(dJson) {

    const refDesc = useCallback(node => {
        if (node !== null) {
            for (let i = 0; i < dJson.desc.length; i++) {
                node.innerHTML += dJson.desc[i];
            }
        }
    }, [dJson]);

    let imgsLeft = [];
    let imgsRight = [];

    for (let i = 0; i < dJson.imgLef.length; i++) {
        imgsLeft.push(<div key={dJson.imgLef[i].id + "l"} >
            <ImgWithZoom
                srcImg={dJson.imgLef[i].src}
                id={dJson.imgLef[i].id}
                class={dJson.imgLef[i].class}
            />
        </div>);
    }
    for (let i = 0; i < dJson.imgRight.length; i++) {
        imgsRight.push(<div key={dJson.imgRight[i].id + "r"} >
            <ImgWithZoom
                srcImg={dJson.imgRight[i].src}
                id={dJson.imgRight[i].id}
                class={dJson.imgRight[i].class}
            />
        </div>);
    }

    return (
        <>
            <div className="TxtColor">
                <h3>{dJson.title}</h3>
            </div>

            <div className="flex">

                {imgsLeft}

                <div className="TextBlock">
                    <h4 ref={refDesc}>
                    </h4>
                </div>

                <div >
                    {imgsRight}
                </div>

            </div>
        </>
    );
}

