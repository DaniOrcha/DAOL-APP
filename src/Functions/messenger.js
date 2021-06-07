export class messengerClass 
{
    constructor() {
        this.name = "";
        this.message = "";
    }

    getName(e) {
        this.name = e.target.value;
        console.log("name " + this.name);
        return this.name;

    }
    getMessage(e) {
        this.message = e.target.value;
        console.log("message " + this.message);
        return this.message;
    }

    isValid () {
        if (typeof this.name !== 'undefined' && this.name.trim() !== '' && typeof this.message !== 'undefined' && this.message.trim() !== '') {
            return true;
        }
        return false;
    }
}





/*     this.getName = (e) => {
        // _Obj[0].name = _e.target.value; 
        this.name = e.target.value;
        // return _Obj[0].name;
        console.log("name " + this.name);
        return this.name;
    }; */


/*     name: "",
    message: "",
    getName : function(e){
        // _Obj[0].name = _e.target.value;
        this.name = e.target.value;
        // return _Obj[0].name;
        return this.name;
      },
      getMessage : function(e){
        this.message = e.target.value;
        return this.message;
      },
      isValid : function(){
        if (typeof this.name !== 'undefined' && this.name.trim() !== '' && typeof this.message !== 'undefined' && this.message.trim() !== '') {
            return true;
        }
        return false;
      } */