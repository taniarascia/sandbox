// Access an element by the ID
const demoId = document.getElementById('demo');

// Add a click event to an ID
demoId.addEventListener('click', function () {
  demoId.classList.toggle('colored-in');
});

// Access an element by class
const demoClass = document.getElementsByClassName('demo');

// Add a click event to all classess
for (i = 0; i < demoClass.length; i++) {
  demoClass[i].addEventListener('click', function () {
    this.classList.toggle('colored-in');
  });
}

// Access an element by tag
const demoTag = document.getElementsByTagName('article');

// Add click event to all tags
for (i = 0; i < demoTag.length; i++) {
  demoTag[i].addEventListener('click', function () {
    this.classList.toggle('colored-in');
  });
};

// Access an element by query
const demoQuery = document.querySelector('.query');

// Add click event to all queries
demoQuery.addEventListener('click', function () {
  this.classList.toggle('colored-in');
});

// Access all elements by query
const demoQueries = document.querySelectorAll('[role="demo"]');

// Add click event to all queries
demoQueries.forEach(q => {
  q.addEventListener('click', function () {
    this.classList.toggle('colored-in');
  });
});

// Create button
const createButton = document.getElementById('createButton');

// Append button to DOM
createButton.addEventListener('click', function () {
  const button = document.createElement('button');
  button.textContent = 'Button';
  const buttonCreationArea = document.getElementById('buttonGoesHere');
  buttonCreationArea.appendChild(button);
});

// Create text node
const createTextNode = document.getElementById('createTextNode');

createTextNode.addEventListener('click', function () {
  const textNode = document.createTextNode('hello');
  const textNodeCreationArea = document.getElementById('textNodeGoesHere');
  textNodeCreationArea.appendChild(textNode);
});

// Change Inner HTML
const changeInnerHTML = document.getElementById('changeInnerHTML');

changeInnerHTML.addEventListener('click', function () {
  changeInnerHTML.innerHTML = 'I changed it. And added a <mark>mark</mark> tag.';
});

// Change attribute
const changeAttribute = document.getElementById('changeAttribute');

changeAttribute.addEventListener('click', function () {
  changeAttribute.setAttribute('src', 'https://via.placeholder.com/175/84C599/ffffff');
});

// Change Inner HTML
const changeStyle = document.getElementById('changeStyle');

changeStyle.addEventListener('click', function () {
  changeStyle.style.backgroundColor = '#808080';
});

// Append Child
const appendListItem = document.getElementById('appendListItem');
const ulAppend = document.getElementById('ulAppend');

appendListItem.addEventListener('click', function () {
  const li = document.createElement('li');
  li.textContent = 'Append <li>';
  ulAppend.appendChild(li);
});

// Remove Child
const removeListItem = document.getElementById('removeListItem');
const ulRemove = document.getElementById('ulRemove');

for (i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.textContent = 'Remove <li>';
  ulRemove.appendChild(li);
}

removeListItem.addEventListener('click', function () {
  ulRemove.removeChild(ulRemove.firstChild);
});


// Replace Child
const replaceListItem = document.getElementById('replaceListItem');
const ulReplace = document.getElementById('ulReplace');

for (i = 0; i < 1; i++) {
  const li = document.createElement('li');
  li.textContent = 'Replace <li>';
  ulReplace.appendChild(li);
}

const newElement = document.createElement('li');
newElement.textContent = 'New value';

replaceListItem.addEventListener('click', function () {
  ulReplace.replaceChild(newElement, ulReplace.firstChild);
});

const outer = document.getElementById('traversing');

for (i = 0; i < 4; i++) {
  const div = document.createElement('div');
  outer.appendChild(div);
}

outer.addEventListener('click', function (event) {
  const elementClicked = event.target;

  if (!elementClicked.firstChild.textContent) {

    for (i = 0; i < elementClicked.children.length; i++) {
      elementClicked.childNodes[i].textContent = 'childNodes ';
    };

    elementClicked.firstChild.textContent += 'firstChild';
    elementClicked.lastChild.textContent += 'lastChild';
    elementClicked.nextSibling.textContent += 'nextSibling';
    elementClicked.previousSibling.textContent += 'previousSibling';
  }
});