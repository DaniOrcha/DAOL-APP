
import Head from '../Components/Header';
import Footer from '../Components/Footer'; 

import { useEffect, useState } from 'react'; 
//import { GetMyData } from '../Functions/contact';
import * as contactFn from '../Functions/contact'; 
import React, { useRef } from 'react'

export function updateData() {
    console.log("update");
}
 

function Contact() { 
    useEffect(() => {
        document.title = "Contacto";
    }); 


    let refEMail = useRef();
    let refBtn = useRef();

    const [email, setEmail] = useState('*********@hotmail.com');

    function handleClick(e) {
        e.preventDefault();
        //contactFn.GetMyData();
        contactFn.GetMyData();
        refBtn.current.value= "adf"; 
        refEMail.current.value= 'adf'; 
        console.log("refEMail: " + refEMail.current.texContent);
        console.log("refBtn: " + refBtn.current); 
    }




    return (
        <div >

            <script type="text/javascript" src="../contact.js"></script>

            <div className="bodyContainer">
                <Head
                    lines="1"
                    line1="Contacto"
                />
                <div className="container noPadding">


                    <div className="BrownBox Contact">
                        <p>Email:</p>
                        {/*<div id="mail"><h3>*********@hotmail.com</h3></div>*/}

                        <div id="mail" ref={refEMail} ><h3>{email}</h3></div>

                        <p>Teléfono:</p>
                        <div id="phone"><h3>(+34) 675***609</h3></div>
                        {/*<input type="button" value="Mostrar Datos" className="Button" onclick="GetMyData()" />*/}

                        <input ref={refBtn}  type="button" value="Mostrar Datos" className="Button" onClick={handleClick} />

                    </div>





                    <form className="BrownBox Contact" action="contactSender.php" method="post">
                        <p>Puede enviarme un mensaje directamente:</p>
                        <label htmlFor="nombre"><p>Nombre:</p></label>
                        <input id="nombre" type="text" name="nombre" required="" />
                        <label htmlFor="mensaje"><p>Mensaje:</p></label>
                        <textarea id="mensaje" name="mensaje" rows="5" required=""></textarea>
                        <input id="submit" type="submit" name="submit" value="Enviar" className="Button" />
                    </form>
                </div>

            </div>
            <Footer />
        </div >
    );
}

export default Contact;