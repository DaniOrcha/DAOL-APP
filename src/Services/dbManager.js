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


 
let refContainer; 

export function readComments(_trigger, _refContainer) {

    refContainer = _refContainer;
    let trigger = _trigger;

    const payload = {
        action: 'readDDBB'
    };

    axios.post('https://daol.es/dbmanager.php', payload)

        .then(function (response) {
            let data = response.data; 
            trigger(data);
        })
        .catch(function (error) {
            console.error(error);
        });
}



export function WriteComent(_comment) {

    let payload = {
        action: 'writeDDBB',
        nombre: _comment.name,
        mensaje: _comment.message
    };

    axios.post('https://daol.es/dbmanager.php', payload)

        .then(function () {
            let newData = {
                NameUser: _comment.name,
                DateStamp: new Date().toISOString().substring(0, 10),
                TextUser: _comment.message
            }
            addPostit(newData);

        })
        .catch(function (error) {
            console.error(error);
        });
}
 
//evita renderizar todos los postit revisar fn react
function addPostit(data) { 
    const container = refContainer.current;
    const postit = document.createElement("DIV"); 
    postit.setAttribute("class", "Postit"); 
    container.appendChild(postit); 
    postit.innerHTML =
        "<h3>" + data.NameUser + "</h3>" +
        "<p>" + data.DateStamp + "</p>" +
        "<p>" + data.TextUser + "</p>";

}