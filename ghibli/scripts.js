const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
/*
var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
*/
//using the fetch api to send our request returns promise
fetch(' https://ghibliapi.herokuapp.com/films')
.then((response) => {
  //returning it in json format
  return response.json()
})
.then((data)=>{
  data.forEach((movie) => {
    //display our data from the api to the DOM
    // Create a div with a card class
  const card = document.createElement('div')
  card.setAttribute('class', 'card')

  // Create an h1 and set the text content to the film's title
  const h1 = document.createElement('h1')
  h1.textContent = movie.title

  // Create a p and set the text content to the film's description
  const p = document.createElement('p')
  movie.description = movie.description.substring(0, 300) // Limit to 300 chars
  p.textContent = `${movie.description}...` // End with an ellipses

  // Append the cards to the container element
  container.appendChild(card)

  // Each card will contain an h1 and a p
  card.appendChild(h1)
  card.appendChild(p)
})
}).catch((err)=>{
  console.log('error')
})
