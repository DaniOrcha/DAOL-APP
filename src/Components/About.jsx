
import React, { useEffect, useRef } from 'react';
import MainController from '../Classes/mainController';


function About() {

    const refAbout = useRef();
    const refComponent = useRef();
    const refLine = useRef();

    useEffect(() => {
        MainController.init("ab", refAbout, refComponent, refLine);
    });


    return (

        <div ref={refAbout} aria-label="container" aria-expanded="false" className="container animations">

            <div ref={refLine} aria-hidden="false" className="lineAnim"></div>

            <div className="container--txtHead">
                Sobre mi
            </div>

            <div ref={refComponent} aria-hidden="true" className="container--about flex column hide" >

                <img src="../resources/portfolio/meb.jpg" className="ImageAbout" alt="err" />

                <div className="BrownBox">

                    <h3>Hola, soy Dani. Me apasiona la ciencia y la tecnología desde pequeño.
                        <br /><br />
                        Mis conocimientos de programación pasan por la electrónica,
                        registros de bits y "Bitwise", hasta la programación orientada a objetos y bases de datos.
                        <br /><br />
                        He programado como profesional en la industria para sistemas DCS. Y como freelance, webs, drivers para sensores, tokens Ethereum ERC20 y videojuegos 2D/3D.
                        Actualmente desarrollo webs en React.
                        <br /><br />
                        Me adapto a cualquier tecnología y lenguaje de programación en función de las necesidades.
                    </h3>

                </div>

                <h5>Amante de los retos y la innovación. Comprometido con la excelencia. Siempre aprendiendo.</h5>

            </div>

        </div>
    );
}

export default About;