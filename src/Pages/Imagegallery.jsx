
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
                <div className="container">

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image1"); }}>
                        <img id="image1" src="../resources/electronic/galery/1.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image2"); }}>
                        <img id="image2" src="../resources/electronic/galery/2.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image3"); }}>
                        <img id="image3" src="../resources/electronic/galery/3.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image5"); }}>
                        <img id="image5" src="../resources/electronic/galery/5.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image5a"); }}>
                        <img id="image5a" src="../resources/electronic/galery/5a.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image8"); }}>
                        <img id="image8" src="../resources/electronic/galery/8.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image9"); }}>
                        <img id="image9" src="../resources/electronic/galery/9.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image10"); }}>
                        <img id="image10" src="../resources/electronic/galery/10.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image37"); }}>
                        <img id="image37" src="../resources/electronic/galery/11a.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image12"); }}>
                        <img id="image12" src="../resources/electronic/galery/12.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image13"); }}>
                        <img id="image13" src="../resources/electronic/galery/13.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image15"); }}>
                        <img id="image15" src="../resources/electronic/galery/15.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image14"); }}>
                        <img id="image14" src="../resources/electronic/galery/14.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image16"); }}>
                        <img id="image16" src="../resources/electronic/galery/16.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image18"); }}>
                        <img id="image18" src="../resources/electronic/galery/18.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image19"); }}>
                        <img id="image19" src="../resources/electronic/galery/19.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image20"); }}>
                        <img id="image20" src="../resources/electronic/galery/20.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>


                    <div className="lensContainer left" onMouseOver={() => { imageZoom("iot1"); }}>
                        <img id="iot1" src="../resources/iot/iot1.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("iot2"); }}>
                        <img id="iot2" src="../resources/iot/iot2.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>


                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image21"); }}>
                        <img id="image21" src="../resources/electronic/galery/21.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>


                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image24"); }}>
                        <img id="image24" src="../resources/electronic/galery/24.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image25"); }}>
                        <img id="image25" src="../resources/electronic/galery/25.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image27"); }}>
                        <img id="image27" src="../resources/electronic/galery/27.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image28"); }}>
                        <img id="image28" src="../resources/electronic/galery/28.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>


                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image31"); }}>
                        <img id="image31" src="../resources/electronic/galery/31.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image32"); }}>
                        <img id="image32" src="../resources/electronic/galery/32.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image34"); }}>
                        <img id="image34" src="../resources/electronic/galery/34.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>

                    <div className="lensContainer left" onMouseOver={() => { imageZoom("image35"); }}>
                        <img id="image35" src="../resources/electronic/galery/35.jpg" className="imageIot gallery" alt="err" />
                        <img src="../resources/lensico.png" className="lensIco" alt="err" />
                    </div>



                </div>
            </div>
            <Footer />
        </ >
    );
}

export default ImageGallery;