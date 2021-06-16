
import React, { useRef, useCallback, useReducer, useEffect } from 'react';
import { initRoadmap } from '../Functions/roadmap.js';

import { AnimatorLine } from '../Classes/linesAnimator';
import '../Styles/roadmapstyle.css';


let icoSrc = [
    "resources/slots/react.png",
    "resources/slots/unity.png",
    "resources/slots/ethereum.png",
    "resources/slots/iot.png",
    "resources/slots/robot.png",
    "resources/slots/web.png",
    "resources/slots/spectrum.png"
]


let nodes = {
    RoadMap: {
        node: null,
    },
    Tree: {
        node: null,
    },
    Card: {
        node: null,
        trigger: null
    },
    Icons: []
}



export function RoadMap() {

    let refRM = useRef();
    let refLine = useRef();

    useEffect(() => {
        nodes.RoadMap.node = refRM;
        initRoadmap(nodes);
        const animatorLineRm = new AnimatorLine(refRM, nodes.Tree.node, refLine, "rm");
        animatorLineRm.init();
    }, [refRM]);

    return (

        <div ref={refRM} className="container animations">

            <div ref={refLine} className="lineAnim"></div>

            <div className="container--txtHead">
                RoadMap
            </div>

            <RoadMapTree
            />

        </div>
    );
}


function RoadMapTree() {

    let refTree = useRef();


    useEffect(() => {
        nodes.Tree.node = refTree;
    }, [refTree]);

    return (

        <div ref={refTree} className="roadMap hide" >

            <CardData
            />

            {icoSrc.map((ico, index) =>
                <div key={index + "i"}>
                    <Icons
                        src={ico}
                    />
                </div>
            )}

        </div>
    );
}


function CardData() {

    let refData = useRef();

    const [data, trigger] = useReducer(

        getData
    );

    useEffect(() => {
        nodes.Card.node = refData;
        nodes.Card.trigger = trigger;
    }, [refData]);

    return (

        <div className="roadMap__data" ref={refData}>

            <div className="roadMap__data__dragIco">
                <img src="resources/slots/drag_ico.png" alt="err" />
            </div>

            {data}

        </div>
    );
}




let id = 0;

function Icons(p) {

    if (id !== 0) {
        id = 0;
    }

    const refIco = useCallback(node => {
        if (node !== null) {
            nodes.Icons[id] = node
            id++;
        }
    }, []);

    return (

        <div ref={refIco} className="roadMap__icon">
            <img src={p.src} className="roadMap__icon--img " alt="err" />
        </div>
    );
}





function getData(state, newstate) {

    if (typeof newstate.desc === 'undefined') {
        return;
    }

    let gradIco;

    if (typeof newstate.degree !== 'undefined') {
        gradIco = (
            <li>
                <i className='fa fa-graduation-cap' aria-hidden='true'> </i>
                {newstate.degree}
            </li>
        );
    }

    return (
        <>
            <div className="roadMap__data__date">
                {newstate.year}
            </div>

            <div className="roadMap__data__title">
                {newstate.txt}
            </div>

            <div className="roadMap__data__description">

                {newstate.desc.map((txt, index) =>
                    <li key={index + "desc"}>
                        {txt}
                    </li>
                )}

                {gradIco}

            </div>
        </>
    );
}

