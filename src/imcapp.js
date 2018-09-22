

export default class IMCApp{
    constructor(el){
        this.data = []
        this.el = document.querySelector(el);
        this.cacheDOM()
        this.initializeEvents();
        this.render();
    }

    cacheDOM(){
        this.form = this.el.querySelector('#imcForm');
        this.content = this.el.querySelector('#content');
        this.altura = this.form.querySelector('#altura');
        this.peso = this.form.querySelector('#peso');
        this.edad = this.form.querySelector('#edad');
    }

    initializeEvents(){
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.processForm();
        });
    }

    processForm(){
        let data = {
            altura: this.altura.value,
            peso: this.peso.value,
            edad : this.edad.value,
            fecha: new Date()
        }
        this.saveData(data);
    }

    saveData(data){
        this.data.push(data);
        this.render();
    }

    render(){
        this.content.textContent = JSON.stringify(this.data);
    }
}