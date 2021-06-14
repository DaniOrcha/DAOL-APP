
import React, { useState, useRef, useEffect } from 'react'
import Head from '../Components/Header';
import { read } from '../Functions/visits';

import { FormMessenger, PostIt } from '../Components/cards';



function Visit() {

    const [load, setLoad] = useState([]);

    let refComments = useRef();

    useEffect(() => {
        document.title = "Visitas"
        read(setLoad, refComments);
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

                <div ref={refComments} className="container animations flex around">
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