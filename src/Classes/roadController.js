import roadData from '../storage/roadMap.json';

const isTouchScreen = 'ontouchstart' in window;

export default class rmController {

    static nodes = {
        card: {
            el: null,
            dispatch: null
        },
        icons: [],

        get cardNode() {
            return this.card;
        },
        set cardNode(obj) {
            this.card.el = obj.ref.current;
            this.card.dispatch = obj.fn;
        },

        get iconsNodes() {
            return this.icons;
        },
        set iconsNodes(ref) {
            this.icons.push(ref);
        }
    }

    static icoPos = [];
    static icoIndex = 0;
    static m_icoIndex = 0;
    static isExpand = false;


    static addContainerEvents(container) {
        container.addEventListener("mouseenter", () => { this.containerMEexpand(container, this.nodes.cardNode); });
        container.addEventListener("mouseleave", () => { this.containerMLshrinkIcons(container, this.nodes.cardNode.el, this.nodes.iconsNodes); });
    }

    static addCardEvents(card) {
        if (!isTouchScreen) {
            card.addEventListener("mouseenter", () => { this.cardMEexpandIcons(card); });
            card.addEventListener("mouseleave", () => { this.cardMLundrag(card); });
            card.addEventListener("mousedown", (e) => { this.cardMDstartDrag(e, card); });
            card.addEventListener("mouseup", () => { this.cardMUendDrag(card); });
            return;
        }
        card.addEventListener("touchstart", (e) => { this.touchStart(e, card); });
        card.addEventListener("touchmove", (e) => { this.touchMove(e); });
    }


    static containerMEexpand(container, card) {
        if (!this.isExpand) {
            container.classList.add("expand");
            card.dispatch(
                { year: "Ruta de aprendizaje", txt: "", desc: [] }
            );
        }
    }

    static containerMLshrinkIcons(container, card, icons) {
        card.style.top = this.icoPos[0] + "px";
        icons.forEach(element => {
            element.classList.remove('Show', 'Icolighted');
            element.setAttribute("aria-expanded", "false");
        });
        container.classList.remove("expand");
        this.isExpand = false;
        this.icoPos = [];
    }

    static cardMEexpandIcons(card) {
        if (!this.isExpand) {
            this.isExpand = true;
            this.nodes.iconsNodes.forEach(element => {
                element.classList.add('Show');
                element.setAttribute("aria-expanded", "true");
                this.icoPos.push(element.offsetTop);
            });
            this.setData(0, 0);
        }
        card.classList.add('lighted', 'grab');
    }

    static cardMLundrag(card) {
        card.classList.remove('lighted');
        card.classList.remove('grab');
        this.cardMUendDrag(card);
    }


    static pos1 = 0;
    static pos2 = 0;

    static cardMDstartDrag = (e, card) => {
        card.classList.add('grabbing');
        card.addEventListener("mousemove", this.cardMMdrag, true);
        this.pos1 = 0
        this.pos2 = e.clientY;
    };
    static cardMUendDrag = (card) => {
        card.classList.remove('grabbing');
        card.removeEventListener("mousemove", this.cardMMdrag, true);
    };
    static cardMMdrag = (e) => {
        e.preventDefault();
        this.pos1 = this.pos2 - e.clientY;
        this.pos2 = e.clientY;
        this.posControl();
    };

    static touchStart = (e, card) => {
        e.preventDefault();
        this.cardMEexpandIcons(card);
        this.pos1 = 0
        this.pos2 = e.touches[0].clientY;
    }
    static touchMove = (e) => {
        e.preventDefault();
        this.pos1 = this.pos2 - e.touches[0].clientY;
        this.pos2 = e.touches[0].clientY;
        this.posControl();
    }


    static posControl = () => {
        let elmnt = rmController.nodes.card.el;
        if (elmnt.offsetTop >= this.icoPos[0] && elmnt.offsetTop <= this.icoPos[this.icoPos.length - 1]) {
            elmnt.style.top = (elmnt.offsetTop - this.pos1) + "px";
            this.TextIndex();
        } else if (elmnt.offsetTop <= this.icoPos[0]) {
            elmnt.style.top = this.icoPos[0] + "px";
        } else if (elmnt.offsetTop >= this.icoPos[this.icoPos.length - 1]) {
            elmnt.style.top = this.icoPos[this.icoPos.length - 1] + "px";
        }
    }


    static TextIndex() {
        let boxDataY = rmController.nodes.cardNode.el.offsetTop + 25;
        for (let i = 0; i < this.icoPos.length; i++) {

            if ((i === this.icoPos.length - 1) || (boxDataY >= this.icoPos[i] && boxDataY < this.icoPos[i + 1])) {

                if (this.icoIndex !== i) {
                    this.m_icoIndex = this.icoIndex;
                    this.icoIndex = i;
                    this.setData(this.icoIndex, this.m_icoIndex);
                    return;
                }
                return;
            }
        }
    }

    static setData(index, m_icoIndex) {
        this.nodes.iconsNodes[m_icoIndex].classList.remove('Icolighted');
        this.nodes.iconsNodes[index].classList.add('Icolighted');
        /* Card.node.current.classList.add('animation');*/
        this.nodes.cardNode.dispatch(roadData[index]);
        /*setTimeout(() => {
        Card.node.current.classList.remove('animation'); 
        }, 2000)*/
    }


}