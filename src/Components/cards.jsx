
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { imageLens, initLens } from '../Functions/lens.js';

import { WriteComent } from '../Functions/visits';

import { messengerClass } from '../Functions/messenger';

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



export function ImgWithLens(props) {

    const icoLens = "../resources/lensico.png";
    const imgRef = useRef();

    useEffect(() => {
        initLens();
    });

    return (
        <div className="lensContainer" onMouseEnter={() => { imageLens(imgRef); }}>
            <img ref={imgRef} src={props.srcImg} className={props.class} alt="err" />
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
                        <ImgWithLens
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



export function PostIt(obj) {

    console.log("POST: " + JSON.stringify(obj.obj));
 

    return (
        obj.obj.map((o, index) =>

            <div key={index + "p"} className="Postit">
                <h3>{o.NameUser}</h3>
                <p>{o.DateStamp}</p>
                <p>{o.TextUser} </p>
            </div>

        )



    );
}













//reordenar servicios
export function FormMessenger(pr) {

    const Messenger = new messengerClass();

    let refName = useRef();
    let refMsg = useRef();
    let refForm = useRef();

    function send(e) {
        e.preventDefault();

        Messenger.data.name = refName.current.value;
        Messenger.data.message = refMsg.current.value;
        Messenger.data.action = pr.action;

        if (Messenger.execute()) {

            refName.current.value = "";
            refMsg.current.value = "";

            if (pr.action === "sendMail") {
                refForm.current.remove();
            }
        }
    }


    return (

        <form ref={refForm} className="BrownBox" onSubmit={send} >

            <h3>{pr.header}</h3>

            <label htmlFor="nombre">
                <p>Nombre:</p>
            </label>
            <input type="text" name="nombre" ref={refName} required />

            <label htmlFor="mensaje">
                <p>Mensaje:</p>
            </label>
            <textarea name="mensaje" rows="5" ref={refMsg} required></textarea>

            <input type="submit" name="submit" value="Enviar" className="Button" />

        </form>
    )

}