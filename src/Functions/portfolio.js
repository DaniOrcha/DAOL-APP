

import { ShowAnimationLine, HideAnimationLine } from './main.js'; 

var portfolioFrames;
var portfolioId;


export function initPortfolio() {

    portfolioFrames = document.getElementById("framesContainer");
    portfolioId = document.getElementById("portfolioId");

    portfolioId.onmouseenter = function () { ShowFrames() };
    portfolioId.onmouseleave = function () { HideFrames() };
}


function ShowFrames() {
    portfolioFrames.classList.remove("hide");
    portfolioId.classList.remove("animations");
    HideAnimationLine();
}

function HideFrames() {
    portfolioFrames.classList.add("hide"); 
    portfolioId.classList.add("animations");
    ShowAnimationLine();
}


