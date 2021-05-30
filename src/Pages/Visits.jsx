
import Head from '../Components/Header';
import Footer from '../Components/Footer';


import { WriteComent } from '../Functions/visits';
import { read } from '../Functions/visits';
import { useEffect } from 'react';
//import React, { useState } from 'react';

import React from "react";

var ctrl = false;


function Visit() {

    useEffect(() => {
        if (ctrl === false) {
            read();
            ctrl = !ctrl;
            document.title = "Unity";
        }
    });


    var name;
    var message;

    function getName(e) {
        name = e.target.value;
    }
    function getMessage(e) {
        message = e.target.value;
    }

    function getSubmit(e) {
        e.preventDefault();
        if (validator(name) && validator(message)) {
            if (WriteComent(name, message)) {
                console.log("REC DDBB!!");
                alert("REC DDBB!!");
            }
        }
        else {
            alert("Rellene el formulario");
        }
    }

    function validator(value) {
        if (typeof value !== 'undefined' && value.trim() !== '') {
            return true;
        }
        return false;
    }


    return (
        <div >
            <div className="bodyContainer">
                <Head
                    lines="1"
                    line1="Visitas"
                />

                <div id="boxComents" className="BrownBox Visit Center">
                    <div id="lineAnimRM" className="lineAnim"></div>
                </div>

                <div className="container noPadding">
                    <form className="BrownBox Visit" onSubmit={getSubmit} >
                        <h3>Deja tu mensaje:</h3>
                        <label htmlFor="nombre"><p>Nombre:</p></label>
                        <input id="nombre" type="text" name="nombre" onChange={getName} />
                        <label htmlFor="mensaje"><p>Mensaje:</p></label>
                        <textarea id="mensaje" name="mensaje" rows="5" onChange={getMessage}></textarea>
                        <input id="submit" type="submit" name="submit" value="Enviar" className="Button" />
                    </form>
                </div>

            </div>
            <Footer />
        </div >
    );
}

export default Visit;