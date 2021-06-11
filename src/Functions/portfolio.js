

import { ShowAnimationLine, HideAnimationLine } from './main.js'; 
 
let portolio;
let cards; 
 

export function initPortfolio(refP, refC) {  
    portolio = refP;
    cards = refC; 
    portolio.current.addEventListener("mouseenter", () => { ShowFrames(); });
    portolio.current.addEventListener("mouseleave", () => { HideFrames(); });  
} 

function ShowFrames() {
    cards.current.classList.remove("hide");
    portolio.current.classList.remove("animations");
    HideAnimationLine();
}

function HideFrames() {
    cards.current.classList.add("hide"); 
    portolio.current.classList.add("animations");
    ShowAnimationLine();
}

 

