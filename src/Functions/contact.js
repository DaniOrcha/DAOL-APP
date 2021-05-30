

import { updateData } from '../Pages/Contact';
 

const axios = require('axios').default;

export function GetMyData() {

    let data = { action: 'getMyData' };

    //axios.post('http://localhost:80/dbmanager.php', data)
    axios.post('http://localhost:80/dbmanager.php', data)

        .then(function (response) {
            let payload = response.data[0]; 
            printData(payload);
        })
        .catch(function (error) {
            //console.log(error);
        }); 
} 

 

function printData(payload) {
      
    document.getElementById("mail").innerHTML = "<h3>" + payload.myEmail + "</h3>";
    document.getElementById("phone").innerHTML = "<h3>" + payload.myPhone + "</h3>";
    updateData();

}