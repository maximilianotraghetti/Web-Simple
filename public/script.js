// Seleccionar elementos
const textbox = document.getElementById('textbox');
const changeColorBtn = document.getElementById('changeColorBtn');

// Variable para llevar el control de la secuencia de colores
let colorIndex = 0;
const colorOptions = [
  { background: 'white', color: 'black' },
  { background: 'black', color: 'white' },
  { background: 'lightblue', color: 'red' }
];

// Evento para la tecla Enter en la caja de texto
textbox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    alert(textbox.value);
  }
});

// Evento para el botón que cambia los colores
changeColorBtn.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colorOptions.length;
  const currentColors = colorOptions[colorIndex];
  textbox.style.backgroundColor = currentColors.background;
  textbox.style.color = currentColors.color;
});
