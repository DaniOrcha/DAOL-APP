
import Head from '../Components/Header';
import Footer from '../Components/Footer';

import { imageZoom } from '../Functions/lens.js';

import { useEffect } from 'react';


function ImageGallery() {

    useEffect(() => {
        document.title = "Galería Electrónica";
    });

    return (
        < >
            <script type="text/javascript" src="../Functions/lens.js"></script>
            <div className="bodyContainer">
                <Head
                    lines="1"
                    line1="Galería Electrónica"
                />
                <div className="container flex around">

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image1"); }}>
                        <img id="image1" src="../resources/electronic/galery/1.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image2"); }}>
                        <img id="image2" src="../resources/electronic/galery/2.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image5"); }}>
                        <img id="image5" src="../resources/electronic/galery/5.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image5a"); }}>
                        <img id="image5a" src="../resources/electronic/galery/5a.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image8"); }}>
                        <img id="image8" src="../resources/electronic/galery/8.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image3"); }}>
                        <img id="image3" src="../resources/electronic/galery/3.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image9"); }}>
                        <img id="image9" src="../resources/electronic/galery/9.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image10"); }}>
                        <img id="image10" src="../resources/electronic/galery/10.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image12"); }}>
                        <img id="image12" src="../resources/electronic/galery/12.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image13"); }}>
                        <img id="image13" src="../resources/electronic/galery/13.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image15"); }}>
                        <img id="image15" src="../resources/electronic/galery/15.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image14"); }}>
                        <img id="image14" src="../resources/electronic/galery/14.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image37"); }}>
                        <img id="image37" src="../resources/electronic/galery/11a.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div> 

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image16"); }}>
                        <img id="image16" src="../resources/electronic/galery/16.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image18"); }}>
                        <img id="image18" src="../resources/electronic/galery/18.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image19"); }}>
                        <img id="image19" src="../resources/electronic/galery/19.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image20"); }}>
                        <img id="image20" src="../resources/electronic/galery/20.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("iot1"); }}>
                        <img id="iot1" src="../resources/iot/iot1.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("iot2"); }}>
                        <img id="iot2" src="../resources/iot/iot2.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>


                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image21"); }}>
                        <img id="image21" src="../resources/electronic/galery/21.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>


                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image24"); }}>
                        <img id="image24" src="../resources/electronic/galery/24.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image25"); }}>
                        <img id="image25" src="../resources/electronic/galery/25.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image27"); }}>
                        <img id="image27" src="../resources/electronic/galery/27.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image28"); }}>
                        <img id="image28" src="../resources/electronic/galery/28.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>


                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image31"); }}>
                        <img id="image31" src="../resources/electronic/galery/31.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image32"); }}>
                        <img id="image32" src="../resources/electronic/galery/32.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image34"); }}>
                        <img id="image34" src="../resources/electronic/galery/34.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseEnter={() => { imageZoom("image35"); }}>
                        <img id="image35" src="../resources/electronic/galery/35.jpg" className="image Iot" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                </div>
            </div>
            <Footer />
        </ >
    );
}

export default ImageGallery;