
import Head from '../Components/Header';
import { BlockProyect2sideAndLens } from '../Components/cards';
import pData from '../storage/proyects2sideAndLens.json';

import '../Styles/lens.css';

function IoT() {

    let objs = [];
    let docTitle = (document.title = "IoT");

    Object.entries(pData).forEach(([key]) => {
        objs.push(pData[key]);
    });


    return (
        < >
            {docTitle}

            <div className="bodyContainer">

                <Head
                    txt={["IoT"]}
                />

                <div className="container">

                    <h2>Dispositivos Wifi con protocolo HTTP</h2>

                    {objs.map((obj, index) =>

                        <div key={index + "e"} >
                            <BlockProyect2sideAndLens
                                {...obj}
                            />
                        </div>

                    )}

                </div>

            </div>
        </ >
    );
}

export default IoT;