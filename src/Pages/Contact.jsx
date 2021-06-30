import React, { useRef, useState } from 'react'
import { Head } from '../Components/overall';

import { queryServer } from '../Services/dbManager';
import { FormMessenger } from '../Components/cards';


function Contact() {

    const payloadGetdata = { action: 'getMyData' };
    const payloadSendmail = { action: 'sendMail' }; 
    const refBtn = useRef();
    const [mydata, setData] = useState({
        email: '*********@hotmail.com',
        phone: '(+34) 675***609'
    });

    const handlerData = (data) => {
        setData({ email: data[0].myEmail, phone: data[0].myPhone });
        refBtn.current.remove();
    }

    const handlerForm = (data) => {
        setForm(<h2>Gracias {data} por su mensaje</h2>)
    }


    function showData(e) {
        e.preventDefault();
        queryServer(payloadGetdata, handlerData);
    }


    const [formMessage, setForm] = useState(
        <FormMessenger
            header="Mensaje directo"
            action={payloadSendmail.action}
            handler={handlerForm}
        />
    );


    const docTitle = (document.title = "Contacto");

    return (
        <>
            {docTitle}

            <div className="bodyContainer">

                <Head
                    txt={["Contacto"]}
                />

                <div className="container noPadding">

                    <div className="BrownBox contact">
                        <p>Email:</p>
                        <div><h3>{mydata.email}</h3></div>
                        <p>Teléfono:</p>
                        <div><h3>{mydata.phone}</h3></div>
                        <input ref={refBtn} type="button" value="Mostrar Datos" className="Button" onClick={showData} />
                    </div>

                    {formMessage}

                </div>

            </div>
        </>
    );
}

export default Contact;