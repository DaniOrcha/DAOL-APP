
let hasTouchscreen = 'ontouchstart' in window;
let img, lens, lensIco, removeIco = false;


export function initLens() {
    if (removeIco) {
        removeIco = !removeIco;
    }
}


export function imageLens(_imgRef) {
    img = _imgRef.current;
    createLens();
    addEvents();
    removeIcoLens();
}


function createLens() {

    lens = document.createElement("DIV");
    lens.setAttribute("class", "lens");

    img.parentElement.insertBefore(lens, img);

    lens.style.backgroundImage = "url('" + img.src + "')";
    lens.style.backgroundSize = (img.width * 4) + "px " + (img.height * 4) + "px";
}


function addEvents() {
    if (hasTouchscreen) {
        lens.addEventListener("touchstart", start);
        lens.addEventListener("touchmove", moveLens);
        lens.addEventListener("touchend", removeLens);
        img.addEventListener("touchend", removeLens);
        lens.classList.add('show');
    } else {
        lens.addEventListener("mousemove", moveLens);
        lens.addEventListener("mouseleave", removeLens);
    }
}

function removeLens() {
    lens.remove();
}

function start(e) {
    moveLens(e);
}


function moveLens(e) {

    if (e.cancelable) { e.preventDefault(); }

    let pos, x, y;

    if (hasTouchscreen) {
        pos = getTouchPos(e);
    } else {
        pos = getCursorPos(e);
    }
    try {
        x = pos.x;
        y = pos.y;
        if (x > img.width - lens.offsetWidth / 4) {
            x = img.width - lens.offsetWidth / 4;
        }
        if (y > img.height - lens.offsetHeight / 4) {
            y = img.height - lens.offsetHeight / 4;
        }
        if (x < 0) {
            x = 0;
        }
        if (y < 0) {
            y = 0;
        }

        lens.style.left = (x - img.width / 2) + "px";
        lens.style.top = (y - img.height / 2) + "px";
        lens.style.backgroundPosition = "-" + (x * 4) + "px -" + (y * 4) + "px";

    } catch (error) {
        console.error(error);
    }
}


function getCursorPos(e) {
    let a, x = 0,
        y = 0;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {
        x: x,
        y: y
    };
}


function getTouchPos(e) {
    let a, x = 0,
        y = 0;
    try {
        a = img.getBoundingClientRect();
        x = e.touches[0].pageX - a.left;
        y = e.touches[0].pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {
            x: x,
            y: y
        };
    } catch (error) {
        console.error(error);
    }
}


function removeIcoLens() {
    if (!removeIco) {
        removeIco = true
        lensIco = document.querySelectorAll('.lensIco');
        lensIco.forEach(l => {
            l.remove();
        });
    }
}
