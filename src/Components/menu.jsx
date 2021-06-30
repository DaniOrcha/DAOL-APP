import { useRef } from "react";
import linksPortfolio from '../storage/portfolio.json';
import { Link } from "react-router-dom";

export function Menu() {

    let refPanel = useRef();
    let refButton1 = useRef();
    let refButton2 = useRef();
    let refButton3 = useRef();

    function showPanel() {
        refButton1.current.classList.add("arc", "top");
        refButton2.current.classList.add("center");
        refButton3.current.classList.add("arc", "bottom");
        refPanel.current.classList.add("show");
        refPanel.current.setAttribute("aria-expanded", "true");
    }
    function hidePanel() {
        refButton1.current.classList.remove("arc", "top");
        refButton2.current.classList.remove("center");
        refButton3.current.classList.remove("arc", "bottom");
        refPanel.current.classList.remove("show");
        refPanel.current.setAttribute("aria-expanded", "false");
    }

    return (
        <>
            <div aria-label="menu" className="menu"  aria-expanded="false"
                onMouseEnter={() => { showPanel(); }}
                onMouseLeave={() => { hidePanel(); }}>

                <div className="menu__button" >
                    <div ref={refButton1} className="menu__button__line"></div>
                    <div ref={refButton2} className="menu__button__line"></div>
                    <div ref={refButton3} className="menu__button__line"></div>
                </div>

                <div ref={refPanel} aria-label="panel" className="menu__panel">

                    <MenuLinks
                    />

                </div>

            </div>

        </>
    );
}


function MenuLinks() {
    return (

        <>

            {linksPortfolio.map((data, index) =>

                <div key={index + "m"}>

                    <Link to={data.link}><p>{data.tittle}</p></Link>

                </div>

            )}

        </>

    );
}