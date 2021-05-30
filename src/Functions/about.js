

import { ShowAnimationLine, HideAnimationLine } from '../Functions/main.js'; 

var AboutContainer;
var AboutId;


export function initAbout() {

    AboutContainer = document.getElementById("AboutContainer");
    AboutId = document.getElementById("AboutId"); 

    AboutId.onmouseenter = function () { ShowFrames() };
    AboutId.onmouseleave = function () { HideFrames() };
}


function ShowFrames() { 
    AboutContainer.classList.remove("hide"); 
    AboutId.classList.remove("animations");
    HideAnimationLine();
}

function HideFrames() { 
    AboutContainer.classList.add("hide"); 
    AboutId.classList.add("animations");
    ShowAnimationLine();
}


 