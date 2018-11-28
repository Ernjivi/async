
class App {

  constructor(selector){
    this.el = document.querySelector(selector);
    this.list = this.el.querySelector('.authors');
    this.init();
  }

  async getAuthors(){
    let request = await fetch('http://localhost:3000/authors');
    let authors = await request.json()
    this.authors = authors;
  }

  render(){
    console.log(this.authors);
  }

  // init(){
  //   this.getAuthors().then(() => {
  //     this.render();
  //   })
  // }

  async init(){
    await this.getAuthors();
    this.render();
  }

}


let myApp = new App('#app');
// myApp.init();