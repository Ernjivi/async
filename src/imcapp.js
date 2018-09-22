

export default class IMCApp{
    constructor(el){
        this.el = document.querySelector(el);
        this.cacheDOM()
    }

    cacheDOM(){
        this.form = this.el.querySelector('#imcForm');
        
    }
}