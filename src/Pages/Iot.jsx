
import Head from '../Components/Header';
import Footer from '../Components/Footer';  
import { useEffect } from 'react'; 
import { BlockProyect2sideAndLens } from '../Components/cards';
import pData from '../storage/proyects2sideAndLens.json';


function IoT() {

    useEffect(() => {
        document.title = "IoT";
    });

    let objs = [];
 

    Object.entries(pData).forEach(([key]) => {
        objs.push(pData[key]);
    });



    return (
        < >
            <div className="bodyContainer">
                <Head
                    lines="1"
                    line1="IoT"
                />

                <div className="container">

                    <h2>Dispositivos Wifi con protocolo HTTP</h2>


                    {objs.map((obj, index) =>
                        <div key={index + "e"} >
                            <BlockProyect2sideAndLens
                                {...obj}
                            />
                        </div>
                    )} 

                </div>

            </div>

            <Footer />

        </ >
    );
}

export default IoT;