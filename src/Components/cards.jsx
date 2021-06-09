 
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

                <h4>
                    <ul>
                        {dJson.desc.map((txt, index) => //index key only for fixed lengh data!
                            <li key={index + "bp"}>
                                {txt}
                            </li>
                        )}
                    </ul>
                </h4> 

            </div>

        </div>
    );
}



export function ImgWithZoom(props) {
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

    return (
        <>
            <div className="TxtColor">
                <h3>{dJson.title}</h3>
            </div>

            <div className="flex">

                {dJson.imgLef.map(imgl =>
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
                            {dJson.desc.map((txt, index) => //index key only for fixed lengh data!
                                <li key={index + "bp2"}>
                                    {txt}
                                </li>
                            )}
                        </ul>
                    </h4>
                </div>

                <div >

                    {dJson.imgRight.map(imgr =>
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

