
 

var AnimationLineRm;
var AnimationLinePF;
var AnimationLineAb;

window.onload = () => {
    set();
};
 
function set(){ //provisional while migration
    AnimationLineRm = document.getElementById("lineAnimRM");
    AnimationLinePF = document.getElementById("lineAnimPF");
    AnimationLineAb = document.getElementById("lineAnimAB"); 
}

export function ShowAnimationLine() {
    set();
    AnimationLineRm.classList.remove("hide");
    AnimationLinePF.classList.remove("hide");
    AnimationLineAb.classList.remove("hide");
}
export function HideAnimationLine() {
    set();
    AnimationLineRm.classList.add("hide");
    AnimationLinePF.classList.add("hide");
    AnimationLineAb.classList.add("hide");
}


