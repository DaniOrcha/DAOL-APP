
import Head from '../Components/Header';
import Footer from '../Components/Footer';

import { Link } from "react-router-dom"; 
import { useEffect } from 'react';

function Electronic() {

    useEffect(() => {
        document.title = "Electrónica";
    });

    return (
        <div >
            <div className="bodyContainer">
                <Head
                    lines="1"
                    line1="Electrónica"
                />
                <div className="container">
                    <h2>Diseño de dispositivos electrónicos</h2>

                    <hr />

                    <div className="flex center">
                        <div className="boxHorizontal">
                            <div className="TxtColor"><br /><h3>Productos de pruebas:</h3></div>
                            <h3>Dispositivos electrónicos con carcasas en impresión 3D<br /></h3>
                            <div className="ImgeWhitDescription">
                                <img src="../resources/electronic/clks1.jpg" className="imageFrame image" alt="err" />
                             Dispositivo en impresión 3D
                        </div>
                            <h4>
                                Software utilizado:<br />
                                <br /><li>Diseño PCB: Eagle</li>
                                <br /><li>Código: Pic C Compiler CCS</li>
                                <br /><li>Diseño 3D: SketchUp</li>
                            </h4>
                            <Link to='/Imagegallery'>Galería de imágenes</Link><br />
                        </div>
                    </div>

                    <hr />

                    <div className="flex center">
                        <div className="boxHorizontal">
                            <div className="TxtColor"><h3>Producto solicitado por el cliente:</h3></div>
                            <h3>Software y electrónica para un sistema dispensador de gel hidroalcohólico formado por :</h3>
                            <div>
                                <div className="ImgeWhitDescription">
                                    <img src="../resources/electronic/dispenser.PNG" className="image" alt="err" />
                                Esquema dispensador
                            </div>
                                <h4>
                                    <li>Bomba peristáltica para dispensar gel hidroalcohólico.</li>
                                    <br /><li>Motor de giro para dispensador de papel al terminar con el gel.</li>
                                    <br /><li>Motor de giro para abrir una trampilla de una papelera.</li>
                                </h4>
                            </div>
                        </div>
                    </div>


                    <hr />


                    <div className="flex center">
                        <div className="boxHorizontal">
                            <div className="TxtColor"><h3>Producto solicitado por el cliente:</h3></div>
                            <h4>Software y documentación de desarrollo para calibrar y medir Co2 en la atmósfera con un controlador Arduino<br /></h4>
                            <div className="ImgeWhitDescription">
                                <img src="../resources/electronic/MG811.jpg" className="imageFrame image" alt="err" />
                             Esquema medidor Co2
                        </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Electronic;