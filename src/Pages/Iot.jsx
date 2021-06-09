
import Head from '../Components/Header';
import Footer from '../Components/Footer'; 

import { useEffect } from 'react';

import { BlockProyect2sideAndLens } from '../Components/cards';
import pData from '../storage/proyects2sideAndLens.json';


function IoT() {

    useEffect(() => {
        document.title = "IoT";
    });

    return (
        < >
            <div className="bodyContainer">
                <Head
                    lines="1"
                    line1="IoT"
                />

                <div className="container">

                    <h2>Dispositivos Wifi con protocolo HTTP</h2>

                    <hr />

                    <BlockProyect2sideAndLens 
                    {...pData.IoT.Server}
                    />  

                    <hr />

                    <BlockProyect2sideAndLens 
                    {...pData.IoT.Client}
                    /> 

                </div>

            </div>

            <Footer />

        </ >
    );
}

export default IoT;