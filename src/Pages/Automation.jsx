
import Head from '../Components/Header';
import Footer from '../Components/Footer';
import { useEffect } from 'react';

function Automation() {

    useEffect(() => {
        document.title = "Automatización";
    });

    return (
        <div>
            <div className="bodyContainer">

                <Head
                    lines="1"
                    line1="Automatización"
                />

                <div className="container">
                    <h2>Diseño de sistemas automatizados</h2>

                    <hr />

                    <div className="flex center">
                        <div className="boxHorizontal">
                            <div className="TxtColor"><h3>Estación de paletizado con Robot Kuka 2400/10:</h3></div>
                            <div className="ImgeWhitDescription">
                                <img src="../resources/portfolio/robotkuka.PNG" className="image" alt="err" />
                                Croquis estación robotizada
                            </div>
                            <h4>Proyecto para una instalación robotizada de selección y paletizado de cajas.</h4>
                        </div>
                    </div> 

                    <hr />

                    <div className="flex center">
                        <div className="boxHorizontal">
                            <div className="TxtColor"><h3>Estación neumática de clasificación y descarga: </h3></div>
                            <div className="ImgeWhitDescription">
                                <img src="../resources/automation/pneumaticstation.png" className="image" alt="err" />
                                Croquis posición estación neumática
                        </div>
                            <h4>Proyecto de una estación neumática automatizada para la selección y descarga de piezas.</h4>
                        </div>
                    </div> 

                    <hr />

                    <div className="flex center">
                        <div className="boxHorizontal">
                            <div className="TxtColor"><h3>Prensa hidráulica para planchas de metal:</h3></div>
                            <div className="ImgeWhitDescription">
                                <img src="../resources/automation/hydraulicstation.png" className="image" alt="err" />
                                Croquis posición prensa hidráulica
                            </div>
                            <h4>Proyecto para el mecanizado de planchas de metal mediante una prensa hidráulica.</h4>
                        </div>
                    </div>  

                </div>
            </div>

            <Footer />

        </div> 

    );
}

export default Automation;