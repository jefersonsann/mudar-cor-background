// Array com cores
const colors = [
  'green',
  'red',
  'blue',
  '#FFFFFF',
  '#F15025',
  'rgb(248, 159, 38)',
  'rgb(221, 146, 76)',
];
// Pegando botão e texto da cor
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');
const title = document.querySelector('.nav__title');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const randomNumber = getRandomNumber();

  // Colocando o valor retornado do array no Bg body
  document.body.style.backgroundColor = colors[randomNumber];
  // Colocando o valor retornado do array como texto
  color.textContent = colors[randomNumber];
  // Colocando o valor como cor do texto
  color.style.color = colors[randomNumber];
  // Colocando cor no title page
  title.style.color = colors[randomNumber];
});

// Pegando 1 item aleatorio no array
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
