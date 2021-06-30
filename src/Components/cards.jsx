import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { imageLens, resetIco } from '../Functions/lens.js';
import { queryServer } from '../Services/dbManager';

export function Card(obj) {
    return (
        <Link to={obj.link} className="container__card" role="link">
            <img src={obj.src} alt="err" className="image card" />
            <h2>{obj.tittle}</h2>
            <h4>{obj.description}</h4>
        </Link>
    );
}


export function CardRef(obj) {
    return (
        <a href={obj.link} className="container__card" rel="noreferrer noopener" target="_blank">
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


export function ImgWithLens(props) {

    const icoLens = "../resources/lensico.png";
    const imgRef = useRef();

    useEffect(() => { //rev
        resetIco();
    });

    return (
        <div aria-label="lensContainer" className="lensContainer" onMouseEnter={() => { imageLens(imgRef); }}>
            <img aria-label={props.id} ref={imgRef} src={props.srcImg} className={props.class} alt="err" />
            <img aria-label="ico" src={icoLens} className="lensIco" alt="err" />
        </div>
    )
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

        <div className="container__proyect">
            <hr />
            <div className="container--txtColor">
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



export function BlockProyect2sideAndLens(obj) {

    return (
        <>
            <hr />
            <div className="container--txtColor">
                <h3>{obj.title}</h3>
            </div>

            <div className="flex">

                {obj.imgLef.map(imgl =>
                    <div key={imgl.id + "l"}>
                        <ImgWithLens
                            srcImg={imgl.src}
                            id={imgl.id}
                            class={imgl.class}
                        />
                    </div>
                )}

                <div className="container__txt">
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
                            <ImgWithLens
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



export function PostIt(pr) {  
    return (
        pr.data.map((o, index) =>

            <div key={index + "p"} className="Postit">
                <h3>{o.NameUser}</h3>
                <p>{o.DateStamp}</p>
                <p>{o.TextUser} </p>
            </div>

        )
    );
}



export function FormMessenger(pr) {

    const refName = useRef();
    const refMsg = useRef();

    function send(e) {
        e.preventDefault();

        const payload = {
            name: refName.current.value,
            message: refMsg.current.value,
            action: pr.action
        }

        queryServer(payload, pr.handler);

        refName.current.value = "";
        refMsg.current.value = ""; 
    }

    return (

        <form aria-label="form" className="BrownBox flex column" onSubmit={send} >

            <h3>{pr.header}</h3>

            <label>
                <p>Nombre:</p>
                <input aria-label="Nombre" defaultValue="" type="text" ref={refName} required />
            </label>

            <label>
                <p>Mensaje:</p>
                <textarea aria-label="Mensaje" defaultValue="" rows="5" ref={refMsg} required></textarea>
            </label>

            <input type="submit" name="submit" value="Enviar" className="Button" />

        </form>
    )

}