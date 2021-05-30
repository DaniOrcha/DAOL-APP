
import Head from '../Components/Header';
import Footer from '../Components/Footer'; 
import { useEffect } from 'react';
 
function Unity() {

    useEffect(() => {
        document.title = "Unity";
    });

    return (
        <div > 
            <div className="bodyContainer">
                <Head
                    lines="1"
                    line1="Unity"
                />
                <div className="container">
                    <h1> Juegos en <a href="https://play.google.com/store/apps/developer?id=DAOL" rel="noreferrer noopener" target="_blank">Google Play</a></h1>

                    <div className="flex center">
                        <div>
                            <a className="frames" href="https://play.google.com/store/apps/details?id=com.DAOL.RobotsBattles" rel="noreferrer noopener" target="_blank">
                                <h2>Robbots Battles</h2>
                                <img src="../resources/portfolio/Ico.png" className="image" alt="err" />
                                <h2>3D</h2>
                            </a>
                            <a className="frames" href="https://play.google.com/store/apps/details?id=com.DAOL.TheCore" rel="noreferrer noopener" target="_blank">
                                <h2>The Core</h2>
                                <img src="../resources/games/theCore.webp" className="image" alt="err" />
                                <h2>3D</h2>
                            </a>
                            <a className="frames" href="https://play.google.com/store/apps/details?id=com.DAOL.BirdWay" rel="noreferrer noopener" target="_blank">
                                <h2>Bird Way</h2>
                                <img src="../resources/games/birdWay.webp" className="image" alt="err" />
                                <h2>3D</h2>
                            </a>
                            <a className="frames" href="https://play.google.com/store/apps/details?id=com.DAOL.BioWars" rel="noreferrer noopener" target="_blank">
                                <h2>Bio Wars</h2>
                                <img src="../resources/games/bioWars.webp" className="image" alt="err" />
                                <h2>2D</h2>
                            </a>
                        </div>
                    </div>

                    <hr />
                    <h3><li>Freelance para otros proyectos en la implementación de clases de personajes, creación base de datos de items en JSON, sistema de inventario, encriptado, guardado y carga de datos.</li></h3>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Unity;