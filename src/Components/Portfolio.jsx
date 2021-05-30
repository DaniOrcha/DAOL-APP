

import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <div id="portfolioId" className="container animations">
            <div id="lineAnimPF" className="lineAnim"></div>
            <div className="fontHead">
                Portfolio
                </div>
            <div id="framesContainer" className="flex center hide">

                <div>
                    <Link to='/Unity'>
                        <div className="frames">
                            <h2>Unity</h2>
                            <img src='/resources/portfolio/Ico.png' alt="err" className="image" />
                            <h3>Juegos 2D y 3D</h3>
                        </div>
                    </Link>

                    <Link to='/Ethereum'>
                        <div className="frames">
                            <h2>Ethereum</h2>
                            <img src="/resources/portfolio/scc1.png" alt="err" className="image" />
                            <h3>SmartContrat + Web App</h3>
                        </div>
                    </Link>

                    <Link to='/IoT'>
                        <div className="frames">
                            <h2>IoT</h2>
                            <img src="/resources/iot/iotpanel.png" alt="err" className="image" />
                            <h3>Servidor | Cliente IoT & Web interface</h3>
                        </div>
                    </Link>

                    <Link to='/Automation'>
                        <div className="frames">
                            <h2>Automatización</h2>
                            <img src="/resources/automation/grafo.png" alt="err" className="image" />
                            <h3>Diseño de instalaciones automatizadas</h3>
                        </div>
                    </Link>

                    <Link to='/Electronic'>
                        <div className="frames">
                            <h2>Electrónica</h2>
                            <img src="/resources/portfolio/iotimg.jpg" alt="err" className="image" />
                            <h3>Soluciones para dispositivos dedicados</h3>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;