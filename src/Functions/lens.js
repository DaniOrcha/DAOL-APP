


export function imageZoom(imgID) {

    var hasTouchscreen = 'ontouchstart' in window;
    var img, lens;
    img = document.getElementById(imgID); 
    lens = document.createElement("DIV");

    lens.setAttribute("class", "lens"); 

    img.parentElement.insertBefore(lens, img); 

    lens.addEventListener("mousemove", moveLens); 

    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens); 
    lens.addEventListener("touchstart", start);
    img.addEventListener("touchstart", start); 


    function start() { 
        lens.style.backgroundImage = "url('" + img.src + "')"; 
    }
     


    function moveLens(e) {

        var pos, x, y; 
        e.preventDefault(); 

        if (hasTouchscreen) {
            pos = getTouchPos(e);
        }
        else {
            pos = getCursorPos(e);
        } 
        try
        { 
            x = pos.x;
            y = pos.y; 
            if (x > img.width - lens.offsetWidth / 4)
            {
                x = img.width - lens.offsetWidth / 4;
            }
            if (y > img.height - lens.offsetHeight / 4)
            {
                y = img.height - lens.offsetHeight / 4;
            }
            if (x < 0)
            {
                x = 0;
            }
            if (y < 0)
            {
                y = 0;
            } 

            lens.style.left = x + "px";
            lens.style.top = y + "px"; 

            lens.style.backgroundImage = "url('" + img.src + "')"; 
            lens.style.backgroundSize = (img.width * 4) + "px " + (img.height * 4) + "px";
            lens.style.backgroundPosition = "-" + (x * 4) + "px -" + (y * 4) + "px";
        } catch (error)
        {
            console.error(error);
        }
    } 


    function getCursorPos(e) {
        var a, x = 0, y = 0; 
        a = img.getBoundingClientRect(); 
        x = e.pageX - a.left;
        y = e.pageY - a.top;   
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }


    function getTouchPos(e) { 
        var a, x = 0, y = 0; 
        try {
        a = img.getBoundingClientRect();  
        x = e.touches[0].pageX - a.left;
        y = e.touches[0].pageY - a.top; 
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
            return { x: x, y: y };
        } catch (error) {
            console.error(error);
        }
    }




}