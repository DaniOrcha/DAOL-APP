
import Head from '../Components/Header';
import Footer from '../Components/Footer';

import { WriteComent, read } from '../Functions/visits';

import React, { useRef, useState } from 'react'

// import * as Fn from '../Functions/commonFn';
import {messengerClass} from '../Functions/messenger'; 

function isValid (_name, _message) {
    if ( typeof _name !== 'undefined' && _name.trim() !== '' && typeof _message !== 'undefined' &&  _message.trim() !== '') {
        return true;
    }
    return false;
}

function Visit() {

    // let commentobj = [{ name: "", message: "" }];

    //let commentobj = new Fn.objComment();

    let messengerObj = new messengerClass();

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
        if(isValid(refName.current.value, refMsg.current.value)){
            
        console.log("value: " + refName.current.value);
        console.log("messengerObj: " + refMsg.current.value);
        }


        /*         if(Fn.validator(commentobj)){
                    WriteComent(commentobj);
                    refName.current.value = ""; 
                    refMsg.current.value = "";
                }
                else {
                    alert("Rellene el formulario");
                }  */

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
                        {/* <input id="nombre" type="text" name="nombre" ref={refName} onChange={(e)=>Fn.getName(e, commentobj)} /> */}
                        <input id="nombre" type="text" name="nombre" ref={refName} onChange={(e) => messengerObj.getName(e)} />
                        <label htmlFor="mensaje"><p>Mensaje:</p></label>
                        <textarea id="mensaje" name="mensaje" rows="5" ref={refMsg} onChange={(e) =>messengerObj.getMessage(e)}></textarea>
                        <input id="submit" type="submit" name="submit" value="Enviar" className="Button" />
                    </form>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Visit;