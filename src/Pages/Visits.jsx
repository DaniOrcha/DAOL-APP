
import React, { useRef, useState } from 'react'

import Head from '../Components/Header';

import { WriteComent, read } from '../Functions/visits';
import { messengerClass } from '../Functions/messenger';


function Visit() {

    const Messenger = new messengerClass();

    let refName = useRef();
    let refMsg = useRef();
    const [isLoad, setisLoad] = useState(false);

    if (isLoad === false) {
        read();
        setisLoad(true);
        document.title = "Visitas";
    }

    function sendMessage(e) {
        e.preventDefault();
        Messenger.name = refName.current.value;
        Messenger.message = refMsg.current.value;
        if (Messenger.isValid()) {
            WriteComent(Messenger);
        }
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
                    <form className="BrownBox Visit" onSubmit={sendMessage} >
                        <h3>Deja tu mensaje:</h3>
                        <label htmlFor="nombre"><p>Nombre:</p></label>
                        <input type="text" name="nombre" ref={refName} required />
                        <label htmlFor="mensaje"><p>Mensaje:</p></label>
                        <textarea name="mensaje" rows="5" ref={refMsg} required></textarea>
                        <input type="submit" name="submit" value="Enviar" className="Button" />
                    </form>
                </div>

            </div>
        </>
    );
}

export default Visit;