
import Head from '../Components/Header';

import { useEffect } from 'react';


import gData from '../storage/imggalery.json';
import { ImgWithZoom } from '../Components/cards';
 
function ImageGallery() {

    useEffect(() => {
        document.title = "Galería Electrónica";
    });


    return (
        < >
            <div className="bodyContainer">

                <Head
                    txt={["Galería Electrónica"]}
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
        </ >
    );
}

export default ImageGallery;