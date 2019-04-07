const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

// app.appendChild(logo);
app.appendChild(container);


function getMoreInfo(url) {
  var description = "";
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function() {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data);
    if (request.status >= 200 && request.status < 400) {
      description = "AGE: " + data.age + "\n\nALIGNMENT: " + data.alignment + "\n\nSIZE: " + data.size_description;
      var textBox = document.getElementById(data.name);
      textBox.textContent = description;
    } else {
      return "Gah, it's not working!";
    }
  };
  request.send();
}

var request = new XMLHttpRequest();
request.open('GET', 'http://www.dnd5eapi.co/api/races', true);
request.onload = function() {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  // console.log(data.results);

  if (request.status >= 200 && request.status < 400) {
    data.results.forEach(race => {

      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = race.name;



      const p = document.createElement('p');
      p.setAttribute('id', race.name);
      getMoreInfo(race.url);
      // race.url

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