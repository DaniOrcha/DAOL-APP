

const axios = require('axios').default; 

export function read() {

    let payload = { action: 'readDDBB' };

       //console.log("send"); 
    axios.post('http://localhost:80/dbmanager.php', payload)

        .then(function (response) {
            let resArray = response.data;
            //console.log(response.data); 
            proccesData(resArray);
        })
        .catch(function (error) {
            //console.log(error);
        });
}


export function WriteComent(name, message) {

    let payload = {
        action: 'writeDDBB',
        nombre: name,
        mensaje: message
    };

    axios.post('http://localhost:80/dbmanager.php', payload)

        .then(function (response) {
            //let resArray = response.data; 
            //console.log(resArray);
            //proccesData(resArray);
             // read();toLocaleDateString("es-ES") 
            //window.location.reload(false); 
            var LocaleDate = new Date();    
            var ComentsContainer, DivName, DivText;
            ComentsContainer = document.getElementById("boxComents");  
            DivName = document.createElement("DIV");
            DivName.setAttribute("class", "Postit");
            ComentsContainer.appendChild(DivName);
            DivName.innerHTML = "<h3>" + name + "</h3>" + LocaleDate.toISOString().substring(0, 10);; 

            DivText = document.createElement("DIV");
            DivName.appendChild(DivText);
            DivText.innerHTML = message;


        })
        .catch(function (error) {
            console.log(error);
        });
}


 
function proccesData(data) {

    var countKey = Object.keys(data).length;

    var ComentsContainer, DivName, DivText;
    ComentsContainer = document.getElementById("boxComents");
    //var dateformat = new Date();

    for (var i = 0; i < countKey; i++) {

        //data[i].DateStamp  = data[i].DateStamp.replaceAll("-", "/");

        //dateformat = data[i].DateStamp ;

        DivName = document.createElement("DIV");
        DivName.setAttribute("class", "Postit");
        ComentsContainer.appendChild(DivName);
        //DivName.innerHTML = "<h3>" + data[i].NameUser + "</h3>" + data[i].DateStamp;
        DivName.innerHTML = "<h3>" + data[i].NameUser + "</h3>" + data[i].DateStamp ;

        DivText = document.createElement("DIV");
        DivName.appendChild(DivText);
        DivText.innerHTML = data[i].TextUser;
    }

}