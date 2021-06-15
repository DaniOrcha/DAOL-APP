 

let AnimationLineRm = {};
let AnimationLinePF = {}
let AnimationLineAb = {};

export class AnimatorLine {

    constructor(container, card, line, type) {
        this.container = container;
        this.card = card;
        this.line = line;
        this.type = type; 
    }

    init() {
        this.container.current.addEventListener("mouseenter", () => { this.ShowCard(); });
        this.container.current.addEventListener("mouseleave", () => { this.HideCard(); });
        AnimatorLine.setRefs(this.type, this.line); 
    }

    ShowCard() {
        this.card.current.classList.remove("hide");
        this.container.current.classList.remove("animations"); 
        AnimatorLine.hideLines();
    }

    HideCard() {
        this.card.current.classList.add("hide");
        this.container.current.classList.add("animations"); 
        AnimatorLine.showLines();
    }

   
    static setRefs(type, ref) {

        switch (type) {
            case "rm":
                AnimationLineRm = ref.current;
                break;
            case "pf":
                AnimationLinePF = ref.current;
                break;
            case "ab":
                AnimationLineAb = ref.current;
                break;
            default:
                break;
        }
    }

    static showLines() {
        AnimationLineRm.classList.remove("hide");
        AnimationLinePF.classList.remove("hide");
        AnimationLineAb.classList.remove("hide");
    }

    static hideLines() {
        AnimationLineRm.classList.add("hide");
        AnimationLinePF.classList.add("hide");
        AnimationLineAb.classList.add("hide");
    } 

}

 