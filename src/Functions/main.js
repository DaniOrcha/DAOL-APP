 
// import { initRoadmap } from './roadmap.js'; 
// import { initPortfolio } from './portfolio.js';
// import { initAbout } from './about.js';
// import { resetPipes } from '../Components/cardsRM';
 
var AnimationLineRm;
var AnimationLinePF;
var AnimationLineAb;
 
window.onload = function() {

    // initRoadmap();
    // initPortfolio();
    // initAbout();

    AnimationLineRm = document.getElementById("lineAnimRM");
    AnimationLinePF = document.getElementById("lineAnimPF");
    AnimationLineAb = document.getElementById("lineAnimAB");
  };
 
export function OnMountInit() { 
 

    AnimationLineRm = document.getElementById("lineAnimRM");
    AnimationLinePF = document.getElementById("lineAnimPF");
    AnimationLineAb = document.getElementById("lineAnimAB");
}             

export function ShowAnimationLine() {
    AnimationLineRm.classList.remove("hide"); 
    AnimationLinePF.classList.remove("hide"); 
    AnimationLineAb.classList.remove("hide"); 
}
export function HideAnimationLine() {
    AnimationLineRm.classList.add("hide"); 
    AnimationLinePF.classList.add("hide"); 
    AnimationLineAb.classList.add("hide"); 
}

 
