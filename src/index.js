// Callback hell
//  fetch('http://localhost:3000/authors')
//   .then(response => {
//     response.json()
//       .then(data => console.log(data))
//   })


// fetch('', {})


//  fetch('http://localhost:3000/authors')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     var app = document.querySelector('#app');
//     var list = app.querySelector('.authors');

//     data.forEach(author => {
//       var listItem = document.createElement('li')
//       listItem.textContent = author.name
//       list.append(listItem);
//     })
//   });

async function getBook(){
  try{
    response = await fetch('http://localhost:3000/books/1');
    book = await response.json();
    return data;
  } catch(err){
    console.log(err);
  }
}


// getBook().then((data) => console.log(data));
console.log(getBook());