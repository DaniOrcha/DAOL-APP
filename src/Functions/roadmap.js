import {
    ShowAnimationLine,
    HideAnimationLine
} from '../Functions/main.js';

import roadData from '../storage/roadMap.json';

const roadObj = roadData;

let Tree;
let RoadMap;
let Card;
let IcoId = 0;



let MapNode = {

    RoadMap: {
        node: null,
        trigger: null
    },
    Tree: {
        node: null,
        trigger: null
    },
    Card: {
        node: null,
        trigger: null
    },
    DateCard: {
        node: null,
        trigger: null
    },
    TitleCard: {
        node: null,
        trigger: null
    },
    TxtCard: {
        node: 4,
        trigger: null
    },

    Icons: []
}



export function PipeRM(name, refNode, trigger) {

    Object.entries(MapNode).forEach(([key]) => {
        if (key === name) {
            MapNode[key].node = refNode;
            MapNode[key].trigger = trigger;
        }
    });
}


export function PipeIco(Node, index) {
    MapNode.Icons[index] = Node;
}


let icoPos = [];


function setIcoPos() {

    icoPos = MapNode.Icons.map((x) => {
        return x.offsetTop;
    })
}



export function initRoadmap() {

    RoadMap = MapNode.RoadMap.node.current;

    RoadMap.addEventListener("mouseenter", () => { ShowTree(); });
    RoadMap.addEventListener("mouseleave", () => { HideTree(); });

    Tree = MapNode.Tree.node.current;

    Card = MapNode.Card.node.current;
    Card.addEventListener("mouseenter", () => { SlotsShow(); lightedGrab(); });
    Card.addEventListener("mouseleave", () => { removeGrab(); });
    Card.addEventListener("mousedown", () => { cursorGrabbing(); });
    Card.addEventListener("mouseup", () => { removeGrabing(); });

    let hasTouchscreen = 'ontouchstart' in window;
    if (hasTouchscreen) {
        dragTouch(Card);
    } else {
        dragElement(Card);
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
        if (elmnt.offsetTop >= icoPos[0] && elmnt.offsetTop <= icoPos[icoPos.length - 1]) {
            elmnt.style.top = (elmnt.offsetTop - pos1) + "px";
            TextIndex();
        } else if (elmnt.offsetTop <= icoPos[0]) {
            elmnt.style.top = icoPos[0] + "px";
        } else if (elmnt.offsetTop >= icoPos[icoPos.length - 1]) {
            elmnt.style.top = icoPos[icoPos.length - 1] + "px";
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

        if (Card.offsetTop >= icoPos[0] && Card.offsetTop <= icoPos[icoPos.length - 1]) {
            Card.style.top = (Card.offsetTop - pos1) + "px";
            TextIndex();
        }
        else if (Card.offsetTop <= icoPos[0]) {
            Card.style.top = icoPos[0] + "px";
        }
        else if (Card.offsetTop >= icoPos[icoPos.length - 1]) {
            Card.style.top = icoPos[icoPos.length - 1] + "px";
        }
    }

    function end() {
        document.body.style.overflow = 'visible';
    }
}


function TextIndex() {

    let boxDataY = Card.offsetTop + 25;

    for (let i = 0; i < icoPos.length; i++) {

        if (i === icoPos.length - 1) {
            if (IcoId !== i) {
                let pos = IcoId;
                IcoId = i;
                setData(IcoId, pos);
                return;
            }
            return;
        }

        if (boxDataY >= icoPos[i] && boxDataY < icoPos[i + 1]) {

            if (IcoId !== i) {
                let pos = IcoId;
                IcoId = i;
                setData(IcoId, pos);
                return;
            }
            return;
        }

    }
}


function ShowTree() {
    Tree.style.visibility = "visible";
    RoadMap.classList.add("expand");
    RoadMap.classList.remove("animations");
    HideAnimationLine();
}

function HideTree() {
    SlotsHide();
    Tree.style.visibility = "hidden";
    RoadMap.classList.remove("expand");
    RoadMap.classList.add("animations");
    ShowAnimationLine();
}

function SlotsShow() {

    MapNode.Icons.forEach(element => {
        element.classList.add('Show');
    });

    MapNode.DateCard.node.current.classList.add('color');
    setIcoPos();
    setData(0, 0);
}


function SlotsHide() {

    MapNode.Icons.forEach(element => {
        element.classList.remove('Icolighted');
        element.classList.remove('Show');
    });

    Card.style.top = icoPos[0] + "px";
    Card.classList.remove('lighted');
    MapNode.DateCard.node.current.classList.remove('color');
    resetData();

}


function setData(index, pos) {

    MapNode.Icons[pos].classList.remove('Icolighted');
    MapNode.Icons[index].classList.add('Icolighted');

    MapNode.DateCard.node.current.classList.add('animation');
    MapNode.TitleCard.node.current.classList.add('animation');
    MapNode.TxtCard.node.current.classList.add('animation');

    MapNode.DateCard.trigger(roadObj[index].year);
    MapNode.TitleCard.trigger(roadObj[index].txt);
    MapNode.TxtCard.trigger({ index: index, data: roadObj[index].desc });

    setTimeout(() => {
        MapNode.DateCard.node.current.classList.remove('animation');
        MapNode.TitleCard.node.current.classList.remove('animation');
        MapNode.TxtCard.node.current.classList.remove('animation');
    }, 2000)
}


function resetData() {
    MapNode.DateCard.trigger("Ruta de aprendizaje");
    MapNode.TitleCard.trigger("");
    MapNode.TxtCard.trigger([]);

}

function lightedGrab() {
    Card.classList.add('lighted');
    Card.classList.add('grab');
}

function removeGrab() {
    Card.classList.remove('grab');
}

function cursorGrabbing() {
    Card.classList.add('grabbing');
}

function removeGrabing() {
    Card.classList.remove('grabbing');
}
