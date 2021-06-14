
import Head from '../Components/Header';
import { BlockProyect } from '../Components/cards';
import proyectData from '../storage/proyects.json';

function Automation() {

    let objs = [];
    let docTitle = (document.title = "Automatización");

    Object.entries(proyectData.Automation).forEach(([key]) => {
        objs.push(proyectData.Automation[key]);
    });


    return (
        <>
            {docTitle}

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