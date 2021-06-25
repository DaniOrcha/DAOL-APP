

let AnimationLineRm = {};
let AnimationLinePF = {}
let AnimationLineAb = {};

export default class MainControler {

    constructor(container, component, line, type) {
        this.container = container;
        this.component = component;
        this.line = line;
        this.type = type;
    }

    init() {
        this.container.current.addEventListener("mouseenter", () => { this.ShowComponent(); });
        this.container.current.addEventListener("mouseleave", () => { this.HideComponent(); });
        MainControler.setLine(this.type, this.line);
    }

    ShowComponent() {
        this.component.current.classList.remove("hide");
        this.container.current.classList.remove("animations");
        this.component.current.setAttribute("aria-hidden", "false");
        this.container.current.setAttribute("aria-expanded", "true");
        MainControler.hideLines();
    }

    HideComponent() {
        this.component.current.classList.add("hide");
        this.container.current.classList.add("animations");
        this.component.current.setAttribute("aria-hidden", "true");
        this.container.current.setAttribute("aria-expanded", "false");
        MainControler.showLines();
    }


    static showLines() {
        AnimationLineRm.classList.remove("hide");
        AnimationLinePF.classList.remove("hide");
        AnimationLineAb.classList.remove("hide");
        AnimationLineRm.setAttribute("aria-hidden", "false");
        AnimationLinePF.setAttribute("aria-hidden", "false");
        AnimationLineAb.setAttribute("aria-hidden", "false");
    }

    static hideLines() {
        AnimationLineRm.classList.add("hide");
        AnimationLinePF.classList.add("hide");
        AnimationLineAb.classList.add("hide");
        AnimationLineRm.setAttribute("aria-hidden", "true");
        AnimationLinePF.setAttribute("aria-hidden", "true");
        AnimationLineAb.setAttribute("aria-hidden", "true");
    }

    static setLine(type, ref) {
        switch (type) {
            case "lineRm":
                AnimationLineRm = ref.current;
                break;
            case "linePF":
                AnimationLinePF = ref.current;
                break;
            case "lineAbout":
                AnimationLineAb = ref.current; 
                break;
            default:
                break;
        }
    }

}

