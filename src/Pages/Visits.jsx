import React, { useState, useRef } from 'react'
import { Head } from '../Components/overall'; 
import { queryServer } from '../Services/dbManager'; 
import { FormMessenger, PostIt } from '../Components/cards';


let dataLoaded = [];

function Visit() {

    const [update, setUpdate] = useState(false);
    const refContainer = useRef();
    const payloadPostits = { action: 'readPostits' };
    const payloadForm = { action: 'writePostit' }; 

    const handlerPostitBoard = (data) => { 
        dataLoaded = data;
        setUpdate(!update);
    }
    const handlerForm = (data) => {
        dataLoaded.push(data[0]); 
        setForm(<h2>Gracias {data[0].NameUser} por su mensaje</h2>) 
    }

    if (dataLoaded.length <= 0) { 
        queryServer(payloadPostits, handlerPostitBoard);
    }

    const [formMessage, setForm] = useState(
        <FormMessenger
            header="Deja tu mensaje:"
            action={payloadForm.action} 
            handler={handlerForm}

        />
    ); 

    const docTitle = (document.title = "Visitas");

    return (
        <>
            {docTitle}

            <div className="bodyContainer">

                <Head
                    txt={[
                        "Visitas",
                        "Deja tu mensaje :)"
                    ]}
                />

                <div aria-label="postBoard" ref={refContainer} className="container animations flex around">
                    <div className="lineAnim"></div>

                    <PostIt
                        data={dataLoaded}
                    />

                </div>
                
                <div className="container noPadding">
                    {formMessage}
                </div>

            </div>
        </>
    );
}

export default Visit;