
const axios = require('axios').default;

let refComments;
let trigger;


export function read(_trigger, _refComments) {

    refComments = _refComments;
    trigger = _trigger;

    const payload = {
        action: 'readDDBB'
    };

    axios.post('https://daol.es/dbmanager.php', payload)

        .then(function (response) {
            let data = response.data;
            console.log("data: ")
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
            addDiv(newData);

        })
        .catch(function (error) {
            console.error(error);
        });
}



//evtia renderizar todos los postit
//revisar con rect create  
function addDiv(data) {

    const box = refComments.current;
    const name = document.createElement("DIV");

    name.setAttribute("class", "Postit");

    box.appendChild(name);

    name.innerHTML =
        "<h3>" + data.NameUser + "</h3>" +
        "<p>" + data.DateStamp + "</p>" +
        "<p>" + data.TextUser + "</p>";

}