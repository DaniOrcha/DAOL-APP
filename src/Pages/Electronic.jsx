
import Head from '../Components/Header';
import Footer from '../Components/Footer';

import { useEffect } from 'react';

import proyectData from '../storage/proyects.json';
import { BlockProyect } from '../Components/cards';

function Electronic() {

    useEffect(() => {
        document.title = "Electrónica";
    });

    return (
        < >
            <div className="bodyContainer">
                
                <Head
                    lines="1"
                    line1="Electrónica"
                />
                
                <div className="container">
                    <h2>Diseño de dispositivos electrónicos</h2>

                    <hr />

                    <BlockProyect
                        {...proyectData.Electronic.TestProducts}
                    />

                    <hr />

                    <BlockProyect
                        {...proyectData.Electronic.Dispenser}
                    />

                    <hr />

                    <BlockProyect
                        {...proyectData.Electronic.CO2Meter}
                    />

                </div>

            </div>

            <Footer />
        </ >
    );
}

export default Electronic;