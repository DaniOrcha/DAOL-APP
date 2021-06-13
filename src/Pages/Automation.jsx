
import Head from '../Components/Header';
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
                    txt={["Automatización"]}
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
        </>
    );
}

export default Automation;