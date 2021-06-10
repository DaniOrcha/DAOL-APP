import {
    ShowAnimationLine,
    HideAnimationLine
} from '../Functions/main.js';

import roadData from '../storage/roadMap.json';
// import { resetPipes } from '../Components/cardsRM';

const roadObj = roadData;

let icon = [];

let IcoId = 0;

let RoadMapTree;
let RoadMap;
let BoxData;

let isSlotShow = false;

let pipe = [];
let pipeIco = [];
let pipeData = [];
let pipeRM = [];
let pipeTree = [];



//refact pipes

export function PipeSeters(_setter, _refNode , _index) {
    //pipe = [];
    // pipe[_index] = [ seter: _setter, node: _refNode ]; 

     //pipe.push({seter: _setter, node: _refNode});
    pipe[_index] = {seter: _setter, node: _refNode}; 
 
    //  console.log("PIPE ! " + pipe.length);
    //   console.log("PIPE  ! " + pipe);
    //   console.log("PIPE ! " + pipe[0].node);
}
export function PipeIco(refNode , index) {
    pipeIco[index] = refNode; 
    // pipeIco.push(refNode);
}
export function PipeData(refNode) {
    pipeData = [];
    pipeData.push(refNode);
    // console.log("pipeData ! " + pipeData.length);
}
export function PipeRoadMap(refNode) {
    pipeRM = [];
    pipeRM.push(refNode);
    // initRoadmap();
}
export function PipeTree(refNode) {
    pipeTree = [];
    pipeTree.push(refNode);
    // console.log("pipeTree ! " + pipeTree.length);
}

 



export function initRoadmap() {
/*       pipe = [];
      pipeIco = [];
      pipeData = [];
      pipeRM = [];
      pipeTree = []; */
    // console.log("init 2 ");
    RoadMap = pipeRM[0].current;

    // console.log("pipeRM[0] ! " + pipeRM.length);

//    console.log("RoadMap ! " + RoadMap);

    // if (RoadMap === null) {
    //      pipe = [];
    //      pipeIco = [];
    //      pipeData = [];
    //      pipeRM = [];
    //      pipeTree = [];
    //     resetPipes();
    //     //  return; 
    // }

    RoadMap.addEventListener("mouseenter", () => { ShowTree(); });
    RoadMap.addEventListener("mouseleave", () => { HideTree(); });

    RoadMapTree = pipeTree[0].current;

    // console.log("BoxData ! " + pipeData.length);
    // console.log("BoxData ! " + pipeData[pipeData.length-1].current);

    BoxData = pipeData[0].current;
    BoxData.addEventListener("mouseenter", () => { SlotsShow(); lightedGrab(); });
    BoxData.addEventListener("mouseleave", () => { removeGrab(); });
    BoxData.addEventListener("mousedown", () => { cursorGrabbing(); });
    BoxData.addEventListener("mouseup", () => { removeGrabing(); });

    let hasTouchscreen = 'ontouchstart' in window;
    if (hasTouchscreen) {
        dragTouch(BoxData);
    } else {
        dragElement(BoxData);
    }

}


function dragElement(elmnt) {

    let pos1 = 0, pos2 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos2 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos2 - e.clientY;
        pos2 = e.clientY;
        if (elmnt.offsetTop >= icon[0] && elmnt.offsetTop <= icon[icon.length - 1]) {
            elmnt.style.top = (elmnt.offsetTop - pos1) + "px";
            TextIndex();
        } else if (elmnt.offsetTop <= icon[0]) {
            elmnt.style.top = icon[0] + "px";
        } else if (elmnt.offsetTop >= icon[icon.length - 1]) {
            elmnt.style.top = icon[icon.length - 1] + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


function dragTouch(event) {

    let pos1 = 0, pos2 = 0;

    event.ontouchstart = start;
    event.ontouchmove = drag;
    event.ontouchend = end;

    function start(event) {
        SlotsShow();
        lightedGrab();
        document.body.style.overflow = 'hidden';
        pos2 = event.touches[0].clientY;
        drag(event);
    }

    function drag(event) {
        pos1 = pos2 - event.touches[0].clientY;
        pos2 = event.touches[0].clientY;

        if (BoxData.offsetTop >= icon[0] && BoxData.offsetTop <= icon[icon.length - 1]) {
            BoxData.style.top = (BoxData.offsetTop - pos1) + "px";
            TextIndex();
        }
        else if (BoxData.offsetTop <= icon[0]) {
            BoxData.style.top = icon[0] + "px";
        }
        else if (BoxData.offsetTop >= icon[icon.length - 1]) {
            BoxData.style.top = icon[icon.length - 1] + "px";
        }
    }

    function end() {
        document.body.style.overflow = 'visible';
    }
}


function TextIndex() {

    let boxDataY = BoxData.offsetTop + 25;
    //  console.log("icon.length  " + icon.length );

    for (let i = 0; i < icon.length; i++) {

        if (i === icon.length - 1) {
            if (IcoId !== i) {
                let pos = IcoId;
                IcoId = i;
                // console.log("IcoId++ " + IcoId );
                setData(IcoId, pos);
                return;
            }
            return;
        }

        if (boxDataY >= icon[i] && boxDataY < icon[i + 1]) {

            // console.log("icon[i + 1] " + icon[i + 1] );
            // console.log("boxDataY++ " + boxDataY );

            if (IcoId !== i) {
                let pos = IcoId;
                IcoId = i;
                // console.log("IcoId-- " + IcoId );
                setData(IcoId, pos);
                return;
            }
            return;
        }

    }
}


function ShowTree() {
    RoadMapTree.style.visibility = "visible";
    RoadMap.classList.add("expand");
    RoadMap.classList.remove("animations");
    HideAnimationLine();
}

function HideTree() {
    SlotsHide();
    RoadMapTree.style.visibility = "hidden";
    RoadMap.classList.remove("expand");
    RoadMap.classList.add("animations");
    ShowAnimationLine();
}

function SlotsShow() {

    if (!isSlotShow) {
        isSlotShow = true;

        icon = [];//delete
        // console.log("Slots.length  " + icon.length );
        pipeIco.forEach(element => {
            element.classList.add('Show');
            icon.push(element.offsetTop); //refact
        });
        pipe[0].node.current.classList.add('color');
        // console.log("Slots.length2  " + icon.length );

// console.log("ICO PUSH ");

        setData(0, 0);
    }
}

function SlotsHide() {

    pipeIco.forEach(element => {
        element.classList.remove('Icolighted');
        element.classList.remove('Show');
    });

    BoxData.style.top = icon[0] + "px";
    BoxData.classList.remove('lighted');
    pipe[0].node.current.classList.remove('color');
    resetData();
    icon = [];
    isSlotShow = false;
}


function setData(index, pos) {


    // console.log("PIPEa ! " + pipe.length);
    // console.log("PIPEa ! " + pipe[0]);

    // console.log("index ! " + index);

    // console.log("roadObj ! " + roadObj[index].year);


    pipeIco[pos].classList.remove('Icolighted');
    pipeIco[index].classList.add('Icolighted');

    // pipe[0].node.current.classList.add('animation');
    // pipe[1].node.current.classList.add('animation');
    // pipe[2].node.current.classList.add('animation');

    pipe[0].seter(roadObj[index].year);
    pipe[1].seter(roadObj[index].txt);
    pipe[2].seter({ index: index, data: roadObj[index].desc });
    // pipe[2].seter({type: "hola"}roadObj[index].desc); 

    // setTimeout(() => {
    //     pipe[0].node.current.classList.remove('animation');
    //     pipe[1].node.current.classList.remove('animation');
    //     pipe[2].node.current.classList.remove('animation');
    // }, 2000)
}


function resetData() {
    pipe[0].seter("Ruta de aprendizaje");
    pipe[1].seter("");
    pipe[2].seter([]);

}

function lightedGrab() {
    BoxData.classList.add('lighted');
    BoxData.classList.add('grab');
}

function removeGrab() {
    BoxData.classList.remove('grab');
}

function cursorGrabbing() {
    BoxData.classList.add('grabbing');
}

function removeGrabing() {
    BoxData.classList.remove('grabbing');
}
