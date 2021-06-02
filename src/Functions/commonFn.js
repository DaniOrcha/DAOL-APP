



export function getName(_e, _Obj) { 

    _Obj[0].name = _e.target.value; 
    // console.log("obj0 " + _Obj[0].name); 
    return _Obj[0].name;
}

export function getMessage(_e, _Obj) {

    _Obj[0].message = _e.target.value;
   // console.log("message " + _Obj[0].message);
    return _Obj[0].message; 
}

export function validator(_Obj) {
 
    if (typeof _Obj[0].name !== 'undefined' && _Obj[0].name.trim() !== '' && typeof _Obj[0].message !== 'undefined' && _Obj[0].message.trim() !== '') {
        return true;
    }
    return false;   

}
