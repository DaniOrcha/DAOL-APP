
import roadData from '../storage/roadMap.json';

const roadObj = roadData;

let nodes;
let RoadMap;
let Card;
let icoPos = [];
let icoIndex = 0;
let m_icoIndex = 0;


export function initRoadmap(nodeData) {

    nodes = nodeData;
    RoadMap = nodeData.RoadMap.node.current;

    RoadMap.addEventListener("mouseenter", () => { ShowTree(); });
    RoadMap.addEventListener("mouseleave", () => { HideTree(); });

    Card = nodeData.Card.node.current;
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
        else if (Card.offsetTop < icoPos[0]) {
            Card.style.top = icoPos[0] + "px";
        }
        else if (Card.offsetTop > icoPos[icoPos.length - 1]) {
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
            if (icoIndex !== i) {
                m_icoIndex = icoIndex;
                icoIndex = i;
                setData(icoIndex, m_icoIndex);
                return;
            }
            return;
        }

        if (boxDataY >= icoPos[i] && boxDataY < icoPos[i + 1]) {

            if (icoIndex !== i) {
                m_icoIndex = icoIndex;
                icoIndex = i;
                setData(icoIndex, m_icoIndex);
                return;
            }
            return;
        }

    }
}


function ShowTree() {
    RoadMap.classList.add("expand");
    resetData();
}

function HideTree() {
    SlotsHide();
    RoadMap.classList.remove("expand");
}

function SlotsShow() {

    nodes.Icons.forEach(element => {
        element.classList.add('Show');
    });

    icoPos = nodes.Icons.map((x) => {
        return x.offsetTop;
    })

    setData(icoIndex, m_icoIndex);
}


function SlotsHide() {

    nodes.Icons.forEach(element => {
        element.classList.remove('Icolighted');
        element.classList.remove('Show');
    });

    Card.style.top = icoPos[0] + "px";
    Card.classList.remove('lighted');
    icoIndex = 0;
    m_icoIndex = 0;

}


function setData(index, m_icoIndex) {

    nodes.Icons[m_icoIndex].classList.remove('Icolighted');
    nodes.Icons[index].classList.add('Icolighted');

    /*  

    MapNode.Card.node.current.classList.add('animation');*/

    nodes.Card.trigger(roadObj[index]);


    /*setTimeout(() => {
    MapNode.Card.node.current.classList.remove('animation'); 
    }, 2000)*/
}


function resetData() {

    nodes.Card.trigger(
        {
            year: "Ruta de aprendizaje",
            txt: "",
            desc: []
        }
    );

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
