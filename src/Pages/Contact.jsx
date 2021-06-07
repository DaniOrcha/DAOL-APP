
import Head from '../Components/Header';
import Footer from '../Components/Footer'; 
 
import { GetMyData, SendMail } from '../Functions/contact'; 
import * as Fn from '../Functions/commonFn'; 

import React, { useRef, useEffect, useState  } from 'react'


function Contact() { 

    useEffect(() => {
        document.title = "Contacto";
    });  

    // let mailObj =  new Fn.objComment();
    let mailObj ;
    let refEMail = useRef();
    let refPhone = useRef();
    let refBtn = useRef();
    let refName = useRef();
    let refMsg = useRef();
    let refMailer = useRef();

    const [email, setEmail] = useState('*********@hotmail.com');
    const [phone, setPhone] = useState('(+34) 675***609');

    function showData(e) {
        e.preventDefault(); 
        GetMyData(setEmail, setPhone) ;
        refBtn.current.remove();  
    } 

    function sendMail(e){
        e.preventDefault(); 
        if(Fn.validator(mailObj)){
            SendMail(mailObj);
            refMailer.current.remove();  
        } 
    }


    return (
        <>   
            <div className="bodyContainer">
                <Head
                    lines="1"
                    line1="Contacto"
                />
                <div className="container noPadding"> 

                    <div className="BrownBox Contact">
                        <p>Email:</p>  
                        <div ref={refEMail} ><h3>{email}</h3></div> 
                        <p>Teléfono:</p>
                        <div ref={refPhone}><h3>{phone}</h3></div>  
                        <input ref={refBtn}  type="button" value="Mostrar Datos" className="Button" onClick={showData} /> 
                    </div> 
 
                    <form  ref={refMailer} className="BrownBox Contact" onSubmit={sendMail}>
                        <p>Puede enviarme un mensaje directamente:</p>
                        <label htmlFor="nombre"><p>Nombre:</p></label>
                        <input type="text" name="nombre" ref={refName} onChange={(e)=>Fn.getName(e, mailObj)}/>
                        <label htmlFor="mensaje"><p>Mensaje:</p></label>
                        <textarea name="mensaje" rows="5" ref={refMsg} onChange={(e)=>Fn.getMessage(e, mailObj)}></textarea>
                        <input type="submit" name="submit" value="Enviar" className="Button" />
                    </form>

                </div>

            </div>
            <Footer />
        </>
    );
}

export default Contact;