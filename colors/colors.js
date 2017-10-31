const bodyColor = document.getElementById('background').value;
const foregroundColor = document.getElementById('foreground').value;
const body = document.querySelector('body');
const preview = document.querySelectorAll('.preview');

body.style.backgroundColor = bodyColor;
body.style.color = foregroundColor;

preview.forEach(view => {
  const input = view.previousElementSibling;
  const value = input.value;
  const id = input.id;

  view.style.backgroundColor = value;

  const spanClass = document.querySelectorAll(`.${id}`);

  spanClass.forEach(span => {
    if (!span.classList.contains('background')) {
      span.style.color = input.value;
    }
  });

  input.addEventListener('blur', () => {
    const spanClass = document.querySelectorAll(`.${id}`);

    if (input.id === 'background') {
      document.querySelector('body').style.backgroundColor = input.value;
    } else if (input.id === 'foreground') {
      document.querySelector('body').style.color = input.value;
    } else {
      spanClass.forEach(span => {
        span.style.color = input.value;
      });
    }
  });
});