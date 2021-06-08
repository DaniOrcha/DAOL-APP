export class messengerClass 
{
    constructor() {
        this.name = "";
        this.message = "";
    }

    isValid () {
        if (typeof this.name !== 'undefined' && this.name.trim() !== '' && typeof this.message !== 'undefined' && this.message.trim() !== '') {
            return true;
        }
        return false;
    }
}

