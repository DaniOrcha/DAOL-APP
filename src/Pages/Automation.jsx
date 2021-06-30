
import { Head } from '../Components/overall';
import { BlockProyect } from '../Components/cards';
import proyectData from '../storage/proyects.json';



function Automation() {

    let objs = [];

    Object.entries(proyectData.Automation).forEach(([key]) => {
        objs.push(proyectData.Automation[key]);
    });

    const docTitle = (document.title = "Automatización");

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