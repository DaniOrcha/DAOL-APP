 
import { initRoadmap } from './roadmap.js'; 
import { initPortfolio } from './portfolio.js';
import { initAbout } from './about.js';
 
var AnimationLineRm;
var AnimationLinePF;
var AnimationLineAb;
 
export function OnMountInit() { 
    initRoadmap();
    initPortfolio();
    initAbout();

    AnimationLineRm = document.getElementById("lineAnimRM");
    AnimationLinePF = document.getElementById("lineAnimPF");
    AnimationLineAb = document.getElementById("lineAnimAB");
}             

export function ShowAnimationLine() {
    AnimationLineRm.classList.remove("pause");
    AnimationLineRm.style.visibility = "visible";
    AnimationLinePF.classList.remove("pause");
    AnimationLinePF.style.visibility = "visible";
    AnimationLineAb.classList.remove("pause");
    AnimationLineAb.style.visibility = "visible";
}
export function HideAnimationLine() {
    AnimationLineRm.classList.add("pause");
    AnimationLineRm.style.visibility = "hidden";
    AnimationLinePF.classList.add("pause");
    AnimationLinePF.style.visibility = "hidden";
    AnimationLineAb.classList.add("pause");
    AnimationLineAb.style.visibility = "hidden";
}

 
