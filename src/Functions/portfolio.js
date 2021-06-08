

import { ShowAnimationLine, HideAnimationLine } from './main.js'; 

let portfolioFrames;
let portfolioId; 

export function initPortfolio() { 
    portfolioFrames = document.getElementById("framesContainer");
    portfolioId = document.getElementById("portfolioId"); 
    portfolioId.addEventListener("mouseenter", () => { ShowFrames(); });
    portfolioId.addEventListener("mouseleave", () => { HideFrames(); });  
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


