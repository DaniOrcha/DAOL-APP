
import Head from '../Components/Header';
import Footer from '../Components/Footer';

import { imageZoom } from '../Functions/lens.js';
import { useEffect } from 'react';

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
                    <div className="TxtColor"><h3>IoT Servidor Web de Temperatura y Humedad:</h3></div>

                    <div className="flex">

                        <div className="lensContainer" onMouseEnter={() => { imageZoom("iotWeb"); }}>

                            <img id="iotWeb" src="../resources/iot/iotWeb.png" className="imageIot movil" alt="err" />

                            <img src="../resources/lensico.png" className="lensIco" alt="err" />

                        </div>

                        <div className="TextBlock Resize1">
                            <h4>
                                <li>Dispositivo con función de servidor web.</li>
                                <br /><li>Cuando un cliente Web accede a la IP del dispositivo, éste envía como respuesta los datos de temperatura y Humedad obtenidos mediante sensores.</li>
                                <br /><li>Se puede acceder al dispositivo desde un navegador Web en cualquier parte del mundo.</li>
                                <br /><li>Diseñado íntgramente. PCB, soldaduras, programación y carcasa en impresión 3D.</li>
                            </h4>
                        </div>
                        <div>
                            <div className="lensContainer" onMouseEnter={() => { imageZoom("iot1"); }}>
                                <img id="iot1" src="../resources/iot/iot1.jpg" className="imageIot" alt="err" />

                                <img src="../resources/lensico.png" className="lensIco" alt="err" />
                            </div>
                            <div className="lensContainer" onMouseEnter={() => { imageZoom("iot2"); }}>
                                <img id="iot2" src="../resources/iot/iot2.jpg" className="imageIot" alt="err" />
                                <img src="../resources/lensico.png" className="lensIco" alt="err" />
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="TxtColor"><h3>IoT Ciente Web de Temperatura, Humedad y Calidad del aire:</h3></div>
                    <div className="flex">
                        <div className="lensContainer left" onMouseEnter={() => { imageZoom("iotpanel"); }}>
                            <img id="iotpanel" src="../resources/iot/iotpanel.png" className="imageIot screen" alt="err" />
                            <img src="../resources/lensico.png" className="lensIco" alt="err" />
                        </div>
                        <div className="TextBlock Resize2">
                            <h4>
                                <li>Dispositivo con función de cliente.</li>
                                <br /><li>Envía a un servidor los datos de temperatura, Humedad y Calidad del aire obtenidos mediante sensores.</li>
                                <br /><li>Los datos se almacenan en una BBDD y se visualizan mediante un navegador Web accediendo a la URL de la aplicación.</li>
                            </h4>
                        </div>
                        <div className="lensContainer" onMouseEnter={() => { imageZoom("clkb2"); }}>
                            <img id="clkb2" src="../resources/iot/clkb2.png" className="imageIot" alt="err" />
                            <img src="../resources/lensico.png" className="lensIco" alt="err" />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />

        </ >
    );
}

export default IoT;