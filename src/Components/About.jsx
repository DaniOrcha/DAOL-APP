 
function About() {
    return (
        <div id="AboutId" className="container animations ">
            <div id="lineAnimAB" className="lineAnim"></div>
            <div className="fontHead">Sobre mi</div>
            <div id="AboutContainer" className="flex hide About">
                <img src="../resources/portfolio/meb.jpg" className="ImageAbout" alt="err" />
                <div className="BrownBox AboutResize">
                    <h3>Hola, mi nombre es Daniel. Me apasiona la ciencia y la tecnología desde pequeño.
                           <br /><br />Tengo conocimientos de programación que abarca de la electrónica digital,
                            registros de bits y "Bitwise", hasta la programación modular orientada a objetos (POO) y bases de datos. He programado
                            desde drivers para sensores en microchips, hasta clases de personajes para videojuegos.
                           <br /><br />Puedo adaptarme a cualquier tecnología y lenguaje de programación en función de las necesidades.
                        </h3>
                </div>
                <h5 className="About"><br />Amante de los retos y la innovación. Comprometido con la excelencia. Siempre aprendiedo.</h5>
            </div>
        </div>
    );
}

export default About;