//used: Visit; Contact.

export function isValid(_name, _message) {
    if (typeof _name !== 'undefined' && _name.trim() !== '' && typeof _message !== 'undefined' && _message.trim() !== '') {
        return true;
    }
    return false;
}

export class CommentObj {
    constructor() {
        this.name = "";
        this.message = "";
    }
}