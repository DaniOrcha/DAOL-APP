
import Head from '../Components/Header';
import Footer from '../Components/Footer';
import { useEffect } from 'react';

import { CardRef } from '../Components/cards';

import unityData from '../storage/unity.json';



function Unity() {

    useEffect(() => { document.title = "Unity"; });   

    return (
        < >
            <div className="bodyContainer">
                <Head
                    lines="1"
                    line1="Unity"
                />
                <div className="container">
                    <h1> Juegos en <a href="https://play.google.com/store/apps/developer?id=DAOL" rel="noreferrer noopener" target="_blank">Google Play</a></h1>

                    <div className="flex center"> 

                        <CardRef
                            link = {unityData.Robbots.link}
                            src={unityData.Robbots.src}
                            tittle={unityData.Robbots.tittle}
                            description={unityData.Robbots.description}
                        />
                        <CardRef
                            link = {unityData.Core.link}
                            src={unityData.Core.src}
                            tittle={unityData.Core.tittle}
                            description={unityData.Core.description}
                        />
                        <CardRef
                            link = {unityData.Bird.link}
                            src={unityData.Bird.src}
                            tittle={unityData.Bird.tittle}
                            description={unityData.Bird.description}
                        />
                        <CardRef
                            link = {unityData.BioWars.link}
                            src={unityData.BioWars.src}
                            tittle={unityData.BioWars.tittle}
                            description={unityData.BioWars.description}
                        />
                    </div>

                    <hr />
                    <h3><li>Freelance para otros proyectos en la implementación de clases de personajes, creación base de datos de items en JSON, sistema de inventario, encriptado, guardado y carga de datos.</li></h3>
                </div>
            </div>
            <Footer />
        </ >
    );
}

export default Unity;