// Array com os valores a serem ramdomizados
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// Pegando botão e texto da cor
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const title = document.querySelector('.nav__title');

// Logica ao click botão
btn.addEventListener('click', (e) => {
  e.preventDefault();
  let hexColor = '#';

  // Loop para pegar 6 items do array
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // Colocando o valor retornado como texto
  color.textContent = hexColor;
  // Colocando o valor como cor do texto
  color.style.color = hexColor;
  // Colocando o valor retornado no Bg body
  document.body.style.backgroundColor = hexColor;
  // Colocando cor no title page
  title.style.color = hexColor;
});

// Pegando os 6 irems no array randomicamente
const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
