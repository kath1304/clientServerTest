class Utility{
    _a;
    constructor(a) {
        this._a=a;
    }
    get a(){
        return this._a;
    }
    set a(b){
        this._a=b;
    }
}
export {Utility};