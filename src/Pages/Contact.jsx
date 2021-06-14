
import React, { useRef, useState } from 'react'

import Head from '../Components/Header';

import { GetMyData, SendMail } from '../Functions/contact';
import { messengerClass } from '../Functions/messenger';


function Contact() {


    const Messenger = new messengerClass();

    let refName = useRef();
    let refMsg = useRef();
    let refBtn = useRef();
    let refMailer = useRef();

    const [email, setEmail] = useState('*********@hotmail.com');
    const [phone, setPhone] = useState('(+34) 675***609');

    function showData(e) {
        e.preventDefault();
        GetMyData(setEmail, setPhone);
        refBtn.current.remove();
    }

    function sendMail(e) {
        e.preventDefault();
        Messenger.name = refName.current.value;
        Messenger.message = refMsg.current.value;
        if (Messenger.isValid()) {
            SendMail(Messenger);
            refMailer.current.remove();
        }
    }

    let docTitle = (document.title = "Contacto");

    return (
        <>
            {docTitle}
            
            <div className="bodyContainer">

                <Head
                    txt={["Contacto"]}
                />

                <div className="container noPadding">

                    <div className="BrownBox Contact">
                        <p>Email:</p>
                        <div><h3>{email}</h3></div>
                        <p>Teléfono:</p>
                        <div><h3>{phone}</h3></div>
                        <input ref={refBtn} type="button" value="Mostrar Datos" className="Button" onClick={showData} />
                    </div>

                    <form ref={refMailer} className="BrownBox Contact" onSubmit={sendMail}>
                        <p>Mensaje directo:</p>
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

export default Contact;