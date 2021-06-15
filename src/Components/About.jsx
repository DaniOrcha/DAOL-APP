

import React, { useEffect, useRef } from 'react'; 
import { AnimatorLine } from '../Classes/linesAnimator';


function About() {

    let refAbout = useRef();
    let refCard = useRef();
    let refLine = useRef();
 
    const animatorLineAb = new AnimatorLine(refAbout, refCard, refLine, "ab");  

    useEffect(() => {
        animatorLineAb.init(); 
    } );


    return (

        <div ref={refAbout} className="container animations ">

            <div ref={refLine} className="lineAnim"></div>
            <div className="fontHead">Sobre mi</div>

            <div ref={refCard} className="flex hide About">

                <img src="../resources/portfolio/meb.jpg" className="ImageAbout" alt="err" />

                <div className="BrownBox AboutResize">

                    <h3>Hola, mi nombre es Daniel. Me apasiona la ciencia y la tecnología desde pequeño.
                       
                        <br /><br />Mis conocimientos de programación abarcan desde la electrónica digital,
                        registros de bits y "Bitwise", a la programación orientada a objetos y bases de datos.
                       
                        <br /><br />He programado como profesional en la industria para sistemas DCS. Y como freelance y hobby, drivers para sensores, webs, tokens Ethereum ERC20 y videojuegos 2D/3D.
                        Actualmente desarrollo nuevas app´s web en ReactJS.
                       
                        <br /><br />Puedo adaptarme a cualquier tecnología y lenguaje de programación en función de las necesidades.
                    </h3>

                </div>

                <h5 className="About"><br />Amante de los retos y la innovación. Disfruto programando y del código elegante. Siempre aprendiendo.</h5>

            </div>

        </div>
    );
}

export default About;