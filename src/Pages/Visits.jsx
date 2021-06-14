
import React, {  useState } from 'react' 
import Head from '../Components/Header'; 
import {  read } from '../Functions/visits';   

import { FormMessenger } from '../Components/cards';

function Visit() {

 
    const [isLoad, setisLoad] = useState(false);

    if (isLoad === false) {
        read();
        setisLoad(true);
        document.title = "Visitas";
    }
 

    return (
        <>
            <div className="bodyContainer">

                <Head
                    txt={[
                        "Visitas",
                        "Deja tu mensaje :)"
                    ]}
                />

                <div id="boxComents" className="BrownBox Visit Center">
                    <div id="lineAnimRM" className="lineAnim"></div>
                </div> 

                <div className="container noPadding">

                    <FormMessenger 
                        header = "Deja tu mensaje: "
                        action = "sendMsg"
                    />

                </div> 

            </div>
        </>
    );
}

export default Visit;