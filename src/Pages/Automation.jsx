
import Head from '../Components/Header';
import Footer from '../Components/Footer';
import { useEffect } from 'react';
import { BlockProyect } from '../Components/cards';
import proyectData from '../storage/proyects.json';

function Automation() {

    useEffect(() => {
        document.title = "Automatización";
    });

    let objs = [];

    Object.entries(proyectData.Automation).forEach(([key]) => {
        objs.push(proyectData.Automation[key]);
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

                    {objs.map((obj, index) =>
                        <div key={index + "g"} className="flex center">
                            <BlockProyect
                                {...obj}
                            />
                        </div>
                    )}

                </div>
            </div>

            <Footer />

        </>

    );
}

export default Automation;