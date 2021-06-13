
import Head from '../Components/Header';
import { useEffect } from 'react';
import proyectData from '../storage/proyects.json';
import { BlockProyect } from '../Components/cards';


function Electronic() {

    useEffect(() => {
        document.title = "Electrónica";
    });

    let objs = [];

    Object.entries(proyectData.Electronic).forEach(([key]) => {
        objs.push(proyectData.Electronic[key]);
    });

    return (
        < >
            <div className="bodyContainer">

                <Head
                    txt={["Electrónica"]}
                />

                <div className="container">

                    <h2>Diseño de dispositivos electrónicos</h2>

                    {objs.map((obj, index) =>
                        <div key={index + "e"} className="flex center">
                            <BlockProyect
                                {...obj}
                            />
                        </div>
                    )}

                </div>

            </div>
        </ >
    );

}

export default Electronic;