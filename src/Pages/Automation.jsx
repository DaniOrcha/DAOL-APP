
import Head from '../Components/Header';
import Footer from '../Components/Footer';
import { useEffect } from 'react';
import { BlockProyect } from '../Components/cards';
import proyectData from '../storage/proyects.json';

function Automation() { 

    useEffect(() => {
        document.title = "Automatización";
    });
 
    return (
        <>
            <div className="bodyContainer">

                <Head
                    lines="1"
                    line1="Automatización"
                />

                <div className="container">
                    <h2>Diseño de sistemas automatizados</h2>

                    <hr /> 

                        <BlockProyect
                            {...proyectData.Automation.Robot}
                        />
 
                    <hr /> 

                        <BlockProyect
                            {...proyectData.Automation.pneumaticStation}
                        /> 
 
                    <hr /> 

                        <BlockProyect
                            {...proyectData.Automation.hydraulicStation}
                        />  
 

                </div>
            </div>

            <Footer />

        </>

    );
}

export default Automation;