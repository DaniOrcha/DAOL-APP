 

const axios = require('axios').default;

export function GetMyData(_setEmail, _setPhone) {

    let data = { action: 'getMyData' }; 
  
    //axios.post('https://daol.es/dbmanager.php', data)
    axios.post('http://localhost:80/dbmanager.php', data)

        .then(function (response) {
            let payload = response.data[0];
            _setEmail(payload.myEmail);
            _setPhone(payload.myPhone); 
        })
        .catch(function () { 
        }); 
}

 
export function SendMail(_data) {  

    let payload = {
        action: 'mailer',
        name: _data[0].name,
        message: _data[0].message
    };
 
    axios.post('https://daol.es/mailer.php', payload)

        .then(function (response) {  
            alert("Mensaje enviado"); 

        })
        .catch(function () { 
        });
}   