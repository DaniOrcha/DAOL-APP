
import Head from '../Components/Header';

import gData from '../storage/imggallery.json';
import { ImgWithLens } from '../Components/cards';

import '../Styles/lens.css';

function ImageGallery() {

    let docTitle = (document.title = "Galería Electrónica");

    return (
        < >
            {docTitle}

            <div className="bodyContainer">

                <Head
                    txt={["Galería Electrónica"]}
                />

                <div className="container flex around">

                    {gData.gallery.map(imgs =>

                        <div key={imgs.id + "g"}>
                            <ImgWithLens
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