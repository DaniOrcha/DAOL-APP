
//reordenar servicios 
import { WriteComent } from '../Functions/visits'; 
import {   SendMail } from '../Functions/contact';
 

export class messengerClass {

    constructor() {

        this.data = {
            name: "",
            message: "",
            action: ""
        }
    }

    execute() {

        if (typeof this.data.name !== 'undefined' &&
            this.data.name.trim() !== '' &&
            typeof this.data.message !== 'undefined' &&
            this.data.message.trim() !== '') {
  
            switch (this.data.action) { 

                case "sendMsg":
                    WriteComent(this.data);   //make async whit return 
                    return true;

                case "sendMail":
                    SendMail(this.data);
                    return true;

                default:
                    alert("err at send message")
                    return false; 
            } 
 
        }

        return false;
    }
 
}

