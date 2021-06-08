

const axios = require('axios').default;

export function GetMyData(_setEmail, _setPhone) {

    let payload = { action: 'getMyData' };

    axios.post('https://daol.es/dbmanager.php', payload) 

        .then(function (response) {
            let data = response.data[0];
            _setEmail(data.myEmail);
            _setPhone(data.myPhone);
        })
        .catch(function (error) {
            console.error(error);
        });
}


export function SendMail(_data) {

    let payload = {
        action: 'mailer',
        name: _data.name,
        message: _data.message
    };

    axios.post('https://daol.es/mailer.php', payload)

        .then(function (response) {
            alert("Mensaje enviado");

        })
        .catch(function (error) {
            console.error(error);
        });
}