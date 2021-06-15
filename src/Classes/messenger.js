
import {WriteComent, SendMail} from '../Services/dbManager';
 

export class messengerClass {

    constructor(name, message, action) { 
        this.data = {
            name: name,
            message: message,
            action: action
        }
    }

    execute() {

        if (typeof this.data.name !== 'undefined' &&
            this.data.name.trim() !== '' &&
            typeof this.data.message !== 'undefined' &&
            this.data.message.trim() !== '') {
  
            switch (this.data.action) {   //make async with return 

                case "sendMsg":
                    WriteComent(this.data);   
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

