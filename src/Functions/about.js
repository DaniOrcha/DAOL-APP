

import { ShowAnimationLine, HideAnimationLine } from '../Functions/main.js';

let AboutContainer;
let AboutId; 

export function initAbout() { 
    AboutContainer = document.getElementById("AboutContainer");
    AboutId = document.getElementById("AboutId");  
    AboutId.addEventListener("mouseenter", () => { ShowFrames(); });
    AboutId.addEventListener("mouseleave", () => { HideFrames(); }); 
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


