
import { Head } from '../Components/overall';


function Ethereum() {

    const docTitle = (document.title = "Ethereum");

    return (
        < >
            {docTitle}

            <div className="bodyContainer">

                <Head
                    txt={["Ethereum"]}
                />

                <div className="container">

                    <h1>Smart Contract SCC</h1>
                    <h2>Token ERC-20. Programado en Solidity</h2>

                    <p>
                        El contrato consiste en el tokenizado del valor de un activo. Los tokens se puede comprar y vender con Ethereum.
                        Cada transacción graba una nota que avala la conformidad de ambas partes, además de quedar registrado el la blockChain de Ethereum.
                    </p>

                    <h3>Redes e interfaces:</h3>
                    <ul>
                        <li><span style={{ color: "#bf80ff", fontWeight: "bold" }} >Red Ethereum: </span>La base del token, donde se realizan las operaciones de
                            compra venta e interactua con otro contrato de  <a href="https://provable.xyz/" rel="noreferrer noopener" target="_blank">Provable</a> que
                            hace de interface con la red HTTP.
                        </li>
                        <br />
                        <li><span style={{ color: "#66b3ff", fontWeight: "bold" }}>Red HTTP: </span>Necesaria para calcular el valor del token en el momento de la transacción.
                            Una consulta del token al contrato de Provable recibe como respuestas los
                            datos en formato JSON alojados en el servidor de la Web del token.
                        </li>
                        <br />
                        <li><span style={{ color: "#b3b3b3", fontWeight: "bold" }}>Red FTP: </span>Usada solo por el dueño del contrato para el control del activo que representa el token. Todos los datos y movimientos son
                            auditoados externamente con acceso completo a los tenedores de tokens.
                        </li>
                    </ul>


                    <div className="flex center">
                        <img src="../resources/scc/SCCnet.png" className="image imageEth" alt="err" />
                    </div>


                    <hr />
                    <br />

                    <h3>Flujo de Valor:</h3>
                    <p>Tres diferentes formas de valor entran en juego:</p>
                    <ul >
                        <li><span style={{ fontWeight: "bold" }}>Ethereum: </span>criptomoneda con la que se interactua con el contrato para la compra venta de tokens SCC.</li>
                        <br />
                        <li><span style={{ fontWeight: "bold" }}>Token ERC-20 SCC: </span>token y contrato de la aplicación cuyo valor representa el valor del activo en Euros.</li>
                        <br />
                        <li><span style={{ fontWeight: "bold" }}>Euro: </span>Valor del activo que representa los tokens SCC.</li>
                    </ul>

                    <div className="flex center">
                        <img src="../resources/scc/SCCflow.png" className="image imageEth" alt="err" />
                    </div>


                    <hr />
                    <br />

                    <h3>Simulador del contrato SCC:</h3>
                    <ul>
                        <li>La tabla de la derecha recibe los inputs del usuario para una operación de compra
                            venta de tokens para comprobar las ganancias o pérdidas netas después de las comisiones.</li>
                        <br />
                        <li>La tabla de la izquierda muestra los datos de la simulación.</li>
                        <br />
                        <li>Botón en la parte inferior para exportar un archivo CSV con los datos de la simulación.</li>
                    </ul>

                    <div className="flex center">
                        <img src="../resources/scc/SCCsim.png" className="image imageEth" alt="err" />
                    </div>


                    <hr />
                    <br />

                    <h3>Dashboard:</h3>

                    <div className="flex center">
                        <img src="../resources/scc/SCCDashBoard.png" className="image imageEth" alt="err" />
                    </div>


                </div>

            </div>
        </ >
    );
}

export default Ethereum;