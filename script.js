function updateBackground(value) {
  // Define a cor de fundo do controle de entrada "range" de acordo com o valor atual
  var range = document.querySelector('input[type="range"]');
  range.style.background = 'linear-gradient(to right, #1ed760 0%, #1ed760 ' + value + '%, #5e5e5e ' + value + '%, #5e5e5e 100%)';
}