
const axios = require('axios').default;

let dispatch ;

export function queryServer(payload, handler) {
    
    dispatch = handler;
    let serverService;

    switch (payload.action) {
        case 'sendMail':
            serverService = 'mailer.php'
            break;
        default:
            serverService = 'dbmanager.php'
            break;
    }

    // axios.post('https://daol.es/' + serverService, payload)  
    axios.post('http://localhost/' + serverService, payload)

        .then(function (response) { 
            setdata(response.data); 
        })

        .catch(function (error) { 
            alert("ops, algo salió mal");
              console.error(error);
        });  
}


 //export for test
export function setdata(data) {    
    dispatch(data);  
}
  