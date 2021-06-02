
import Head from '../Components/Header';
import Footer from '../Components/Footer';

import { WriteComent, read } from '../Functions/visits'; 

import React, { useRef, useState } from 'react'

import * as Fn from '../Functions/commonFn'; 

function Visit() {

    var commentobj = [{ name: "", message: "" }];
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

        if(Fn.validator(commentobj)){
            WriteComent(commentobj);
            refName.current.value = ""; 
            refMsg.current.value = "";
        }
        else {
            alert("Rellene el formulario");
        } 
    }


    return (
        <>
            <div className="bodyContainer">
                <Head
                    lines="2"
                    line1="Visitas"
                    line2="Deja tu mensaje :)"
                />

                <div id="boxComents" className="BrownBox Visit Center">
                    <div id="lineAnimRM" className="lineAnim"></div>
                </div>

                <div className="container noPadding">
                    <form className="BrownBox Visit" onSubmit={sendMessage} >
                        <h3>Deja tu mensaje:</h3>
                        <label htmlFor="nombre"><p>Nombre:</p></label>
                        <input id="nombre" type="text" name="nombre" ref={refName} onChange={(e)=>Fn.getName(e, commentobj)} />
                        <label htmlFor="mensaje"><p>Mensaje:</p></label>
                        <textarea id="mensaje" name="mensaje" rows="5" ref={refMsg} onChange={(e)=>Fn.getMessage(e, commentobj)}></textarea>
                        <input id="submit" type="submit" name="submit" value="Enviar" className="Button" />
                    </form>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Visit;