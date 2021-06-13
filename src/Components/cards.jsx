
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { imageZoom, init } from '../Functions/lens.js';


export function Card(obj) {
    return (
        <Link to={obj.link} className="frames">
            <img src={obj.src} alt="err" className="image card" />
            <h2>{obj.tittle}</h2>
            <h4>{obj.description}</h4>
        </Link>
    );
}


export function CardRef(obj) {
    console.log("unity: " + obj);
    return (
        <a href={obj.link} className="frames" rel="noreferrer noopener" target="_blank">
            <img src={obj.src} alt="err" className="image card" />
            <h2>{obj.tittle}</h2>
            <h4>{obj.description}</h4>
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


export function BlockProyect(obj) {

    let aLink;


    if (typeof obj.alink !== 'undefined') {

        aLink = (
            <Link to={obj.alink.path}  >
                <h4>{obj.alink.txt} </h4>
            </Link>
        );  
    }

    return (

        <div className="boxHorizontal">
            <hr />
            <div className="TxtColor">
                <h3>{obj.title}</h3>
            </div>

            <ImgWithDescription
                src={obj.img.src}
                description={obj.img.description}
            />
            <br />
            <h4>
                <ul>
                    {obj.desc.map((txt, index) =>
                        <li key={index + "bp"}>
                            {txt}
                        </li>
                    )}
                </ul>

                {aLink}

            </h4>

        </div>

    );
}



export function ImgWithZoom(props) {
    const id = props.id;
    const icoLens = "../resources/lensico.png";

    useEffect(()=>{
        init();
    });

    return (
        <div className="lensContainer" onMouseEnter={() => { imageZoom({ id }); }}>
            <img id={props.id} src={props.srcImg} className={props.class} alt="err" />
            <img src={icoLens} className="lensIco" alt="err" />
        </div>
    )
}



export function BlockProyect2sideAndLens(obj) {

    return (
        <>
            <hr />
            <div className="TxtColor">
                <h3>{obj.title}</h3>
            </div>

            <div className="flex">

                {obj.imgLef.map(imgl =>
                    <div key={imgl.id + "l"}>
                        <ImgWithZoom
                            srcImg={imgl.src}
                            id={imgl.id}
                            class={imgl.class}
                        />
                    </div>
                )}

                <div className="ListTxtBlock">
                    <h4>
                        <ul>
                            {obj.desc.map((txt, index) =>
                                <li key={index + "bp2"}>
                                    {txt}
                                </li>
                            )}
                        </ul>
                    </h4>
                </div>

                <div >

                    {obj.imgRight.map(imgr =>
                        <div key={imgr.id + "r"}>
                            <ImgWithZoom
                                srcImg={imgr.src}
                                id={imgr.id}
                                class={imgr.class}
                            />
                        </div>
                    )}

                </div>

            </div>
        </>
    );
}

