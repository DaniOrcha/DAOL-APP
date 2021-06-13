
    let eControl = [];
    let hasTouchscreen = 'ontouchstart' in window;
    let imgID, img, lens, lensIco, removeIco = false;

    


    export function init() {  //provisional !!!
        eControl = [];
        removeIco = false;
    }

export function imageZoom(_imgID) {

    if (typeof _imgID === 'object') {
        imgID = _imgID.id;
    }
    else{

        imgID = _imgID;
    }
 
    img = document.getElementById(imgID);

    if (!isExist()) {
        createLens();
    }

    function isExist() {
        for (var i = 0; i < eControl.length; i++) {
            if (eControl[i] === imgID) {
                lens = img.parentElement.childNodes[0];
                return true;
            }
        }
        return false;
    }


    function createLens() {
        lens = document.createElement("DIV");
        lens.setAttribute("class", "lens");
        img.parentElement.insertBefore(lens, img);
 
        lens.style.backgroundImage = "url('" + img.src + "')";
        lens.style.backgroundSize = (img.width * 4) + "px " + (img.height * 4) + "px";

        if (!removeIco) {
            removeIco = true 
            lensIco = document.querySelectorAll('.lensIco');
            lensIco.forEach(l => {
                l.remove();
            });
        }
 
        if (hasTouchscreen) {
            lens.addEventListener("touchstart", start);
            lens.addEventListener("touchmove", moveLens);
            img.addEventListener("touchstart", start);
            img.addEventListener("touchmove", moveLens);
        } else {
            lens.addEventListener("mousemove", moveLens);
            img.addEventListener("mousemove", moveLens);
        }
        
        eControl.push(imgID);
    }


    function start() {
        lens.style.backgroundImage = "url('" + img.src + "')";
    }


    function moveLens(e) {
 
        var pos, x, y;
        e.preventDefault();

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
                lens.classList.remove('show');
            }

            lens.style.left = (x - 20) + "px";
            lens.style.top = (y - 20) + "px";
            lens.style.backgroundPosition = "-" + (x * 4) + "px -" + (y * 4) + "px";

        } catch (error) {
            console.error(error);
        }
    }


    function getCursorPos(e) {
        var a, x = 0,
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
        var a, x = 0,
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



}