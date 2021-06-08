import {
    ShowAnimationLine,
    HideAnimationLine
} from '../Functions/main.js';

import roadData from '../storage/roadMap.json';

const roadObj = roadData;

let icon = [];

let IcoFrame;
let IcoId = 0;

let RoadMapTree;
let RoadMap;
let BoxData;

let isSlotShow = false;



function ShowTree() {
    RoadMapTree.style.visibility = "visible";
    RoadMap.classList.add("expand");
    RoadMap.classList.remove("animations");
    updateIcons();
    HideAnimationLine();
}

function HideTree() {
    SlotsHide();
    RoadMapTree.style.visibility = "hidden";
    RoadMap.classList.remove("expand");
    RoadMap.classList.add("animations");
    ShowAnimationLine();
}



export function initRoadmap() {


    RoadMapTree = document.getElementById("RoadMapTree");
    RoadMapTree.style.visibility = "hidden";
    RoadMap = document.getElementById("RoadMapId");
    RoadMap.onmouseenter = () => { ShowTree() };
    RoadMap.onmouseleave = () => { HideTree() };

    BoxData = document.getElementById("boxData");
    BoxData.addEventListener("mouseenter", () => { SlotsShow(); borderHiled(); });
    BoxData.addEventListener("mouseleave", () => { borderDark(); });
    BoxData.addEventListener("mousedown", () => { cursorGrabbing(); });
    BoxData.addEventListener("mouseup", () => { cursorNOGrabbing(); });

    updateIcons();

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
    let box = document.getElementById("boxData");
    let pos1 = 0,  pos2 = 0;

    event.ontouchstart = start;
    event.ontouchmove = drag;
    event.ontouchend = end;

    function start(event) {
        SlotsShow();
        borderHiled();
        document.body.style.overflow = 'hidden';
        pos2 = event.touches[0].clientY;
        drag(event);
    }

    function drag(event) {
        pos1 = pos2 - event.touches[0].clientY;
        pos2 = event.touches[0].clientY;

        if (box.offsetTop >= icon[0] && box.offsetTop <= icon[icon.length - 1]) {
            box.style.top = (box.offsetTop - pos1) + "px";
            TextIndex();
        }
        else if (box.offsetTop <= icon[0]) {
            box.style.top = icon[0] + "px";
        }
        else if (box.offsetTop >= icon[icon.length - 1]) {
            box.style.top = icon[icon.length - 1] + "px";
        }
    }

    function end() {
        document.body.style.overflow = 'visible';
    }
}


function TextIndex() {

    let boxDataY = document.getElementById("boxData").offsetTop + 25;

    for (let i = 0; i < icon.length; i++) {

        if (i === icon.length - 1) {
            if (IcoId !== i) {
                IcoId = i;
                SetSlot(IcoId);
                return;
            }
            return;
        }

        if (boxDataY >= icon[i] && boxDataY < icon[i + 1]) {
            if (IcoId !== i) {
                IcoId = i;
                SetSlot(IcoId);
                return;
            }
            return;
        }

    }

}


function borderHiled() {
    BoxData.classList.add('hiled');
    BoxData.classList.add('grab');
}

function borderDark() {
    BoxData.classList.remove('grab');
}

function cursorGrabbing() {
    BoxData.classList.add('grabbing');
}

function cursorNOGrabbing() {
    BoxData.classList.remove('grabbing');
}




function SlotsShow() {

    if (!isSlotShow) {
        isSlotShow = true;

        for (var i = 0; i < icon.length; i++) {
            IcoFrame = document.getElementById("ico" + i)
            IcoFrame.classList.add('Show');
        }

        updateIcons();
        SetSlot(0);
    }
}

function SlotsHide() {
    for (var i = 0; i < icon.length; i++) {
        IcoFrame = document.getElementById("ico" + i)
        IcoFrame.classList.remove('Show');
    }
    BoxData.style.top = icon[0] + "px";
    updateIcons();
    SetSlot(100);
    document.getElementById("ico0").classList.remove('hiled');
    isSlotShow = false;

    BoxData.classList.remove('hiled');
}


function SetSlot(_id) {

    for (var i = 0; i < icon.length; i++) {
        IcoFrame = document.getElementById("ico" + i)
        IcoFrame.classList.remove('hiled');
    }
    effectsDescription(_id);

}



function effectsDescription(_id) {

    var DateBox = document.getElementById("boxDate")
    var container = document.getElementById("boxTitle")
    var TextBox = document.getElementById("boxDescription")

    container.classList.add('pre-animation');
    TextBox.classList.add('pre-animation');

    if (_id !== 100) {

        IcoFrame = document.getElementById("ico" + _id)
        IcoFrame.classList.add('hiled');
        container.innerHTML = decodeURIComponent(roadObj[_id].txt);
        DateBox.innerHTML = roadObj[_id].year;
        TextBox.innerHTML = decodeURIComponent(roadObj[_id].desc);
    } else {
        DateBox.innerHTML = "Ruta de aprendizaje";
        container.innerHTML = "";
        TextBox.innerHTML = "";
    }

    setTimeout(function () {
        container.classList.remove('pre-animation')
        TextBox.classList.remove('pre-animation')
    }, 2000)
}


function updateIcons() {
    icon = [
        document.getElementById("ico0").offsetTop,
        document.getElementById("ico1").offsetTop,
        document.getElementById("ico2").offsetTop,
        document.getElementById("ico3").offsetTop,
        document.getElementById("ico4").offsetTop,
        document.getElementById("ico5").offsetTop,
        document.getElementById("ico6").offsetTop
    ];
}