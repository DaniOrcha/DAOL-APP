
import Head from '../Components/Header';
import Footer from '../Components/Footer';

import { useEffect } from 'react';


import gData from '../storage/imggalery.json';
import { ImgWithZoom } from '../Components/cards';


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

                    {gData.gallery.map(imgs =>
                        <div key={imgs.id + "g"}>
                            <ImgWithZoom
                                srcImg={imgs.src}
                                id={imgs.id}
                                class={gData.meta.class}
                            />
                        </div>
                    )}

                </div>

            </div>

            <Footer />
        </ >
    );
}

export default ImageGallery;