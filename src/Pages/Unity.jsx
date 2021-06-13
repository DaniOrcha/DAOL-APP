
import Head from '../Components/Header';
import { useEffect } from 'react';
import { CardRef } from '../Components/cards';
import unityData from '../storage/unity.json';



function Unity() {

    useEffect(() => { document.title = "Unity"; });

    return (
        < >
            <div className="bodyContainer">

                <Head
                    txt={["Unity"]}
                />

                <div className="container">

                    <h1> Juegos en <a href="https://play.google.com/store/apps/developer?id=DAOL" rel="noreferrer noopener" target="_blank">Google Play</a></h1>

                    <div className="flex center">

                        {unityData.map((obj, index) =>
                            <div key={index + "u"} >
                                <CardRef
                                    {...obj}
                                />
                            </div>
                        )}

                    </div>

                    <hr />

                    <h3><li>Freelance para otros proyectos en la implementación de clases de personajes, creación base de datos de items en JSON, sistema de inventario, encriptado, guardado y carga de datos.</li></h3>

                </div>

            </div>
        </ >
    );
}

export default Unity;