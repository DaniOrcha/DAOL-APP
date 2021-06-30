import React, { useRef, useCallback, useReducer, useEffect } from 'react';

import MainController from '../Classes/mainController';
import rmController from '../Classes/roadController';  

const icoSrc = [
    "resources/slots/react.png",
    "resources/slots/unity.png",
    "resources/slots/ethereum.png",
    "resources/slots/iot.png",
    "resources/slots/robot.png",
    "resources/slots/web.png",
    "resources/slots/spectrum.png"
]


 

let reftree;

export function RoadMap() {

    const refRM = useRef();
    const refLine = useRef();

    useEffect(() => { 
        MainController.init("rm", refRM, reftree, refLine);
        rmController.addContainerEvents(refRM.current); 
    }, [refRM]);

    return (

        <div ref={refRM} aria-label="container" aria-expanded="false" className="container animations flex center">

            <div ref={refLine} aria-hidden="false" className="lineAnim"></div>

            <div className="container--txtHead">
                RoadMap
            </div>

            <RoadMapTree
            />

        </div>
    );
}

//export for test
export function RoadMapTree() {

    const refTree = useRef();

    useEffect(() => {
        reftree = refTree;
    }, [refTree]);

    return (

        <div ref={refTree} aria-label="tree" aria-hidden="true" className="roadMap hide" >

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

    const refData = useRef();
    const [data, dispatch] = useReducer(setData);

    useEffect(() => { 
        rmController.nodes.cardNode = { ref: refData, fn: dispatch };
        rmController.addCardEvents(refData.current);
    }, [refData]);

    return (

        <div aria-label="CardData" className="roadMap__data" ref={refData}>

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
        rmController.nodes.icons = []; 
    }

    const refIco = useCallback(node => {
        if (node !== null) { 
            rmController.nodes.iconsNodes = node;
            id++;
        }
    }, []);

    return (

        <div ref={refIco} aria-label="icons" aria-expanded="false" className="roadMap__icon">
            <img src={p.src} className="roadMap__icon--img " alt="err" />
        </div>
    );
}





function setData(state, newstate) {

    if (typeof newstate === 'undefined') {
        return state;
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

