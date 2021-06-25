
import React, { useState, useRef, useEffect } from 'react'
import Head from '../Components/Header';
import { readComments } from '../Services/dbManager'; 
import { FormMessenger, PostIt } from '../Components/cards';


function Visit() {

    const [load, setLoad] = useState([]);

    let refContainer = useRef();

    useEffect(() => {
        document.title = "Visitas"
        readComments(setLoad, refContainer);
        
        return () => {
            setLoad({});  
          };

    }, [setLoad]);


    return (
        <>
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
                        obj={load}
                    />

                </div>

                <div className="container noPadding">

                    <FormMessenger
                        header="Deja tu mensaje: "
                        action="sendMsg"
                    />

                </div>

            </div>
        </>
    );
}

export default Visit;