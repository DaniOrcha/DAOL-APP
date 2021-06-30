

export default class MainController {

    static AnimationLineRm;
    static AnimationLinePF;
    static AnimationLineAb;

    static init(node, container, component, line) {
        container.current.addEventListener("mouseenter", () => { this.ShowComponent(container, component); });
        container.current.addEventListener("mouseleave", () => { this.HideComponent(container, component); });

        switch (node) {
            case "rm":
                this.AnimationLineRm = line.current; 
                break;
            case "pf":
                this.AnimationLinePF = line.current;
                break;
            case "ab":
                this.AnimationLineAb = line.current;
                break;
            default:
                break;
        }
    }

    static ShowComponent(container, component) {
        component.current.classList.remove("hide");
        component.current.setAttribute("aria-hidden", "false");
        container.current.classList.remove("animations");
        container.current.setAttribute("aria-expanded", "true");
        this.hideLines();
    }

    static HideComponent(container, component) {
        component.current.classList.add("hide");
        component.current.setAttribute("aria-hidden", "true");
        container.current.classList.add("animations");
        container.current.setAttribute("aria-expanded", "false");
        this.showLines();
    }

    static showLines() {
        this.AnimationLineRm.classList.remove("hide");
        this.AnimationLineRm.setAttribute("aria-hidden", "false");
        this.AnimationLinePF.classList.remove("hide");
        this.AnimationLinePF.setAttribute("aria-hidden", "false");
        this.AnimationLineAb.classList.remove("hide");
        this.AnimationLineAb.setAttribute("aria-hidden", "false");
    }

    static hideLines() {
        this.AnimationLineRm.classList.add("hide");
        this.AnimationLineRm.setAttribute("aria-hidden", "true");
        this.AnimationLinePF.classList.add("hide");
        this.AnimationLinePF.setAttribute("aria-hidden", "true");
        this.AnimationLineAb.classList.add("hide");
        this.AnimationLineAb.setAttribute("aria-hidden", "true");
    }
}


