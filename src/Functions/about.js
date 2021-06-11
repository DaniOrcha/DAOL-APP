

import { ShowAnimationLine, HideAnimationLine } from '../Functions/main.js';

let About;
let Card; 

export function initAbout(about, card) {  
    About = about;
    Card = card; 
    About.current.addEventListener("mouseenter", () => { ShowFrames(); });
    About.current.addEventListener("mouseleave", () => { HideFrames(); }); 
} 

function ShowFrames() {
    Card.current.classList.remove("hide");
    About.current.classList.remove("animations");
    HideAnimationLine();
}

function HideFrames() {
    Card.current.classList.add("hide");
    About.current.classList.add("animations");
    ShowAnimationLine();
}


