document.addEventListener('DOMContentLoaded', () => {

const cardSlides = document.querySelectorAll('.card-slide');
const nav = document.querySelector('.servicos-navegacao nav');

function atualizarClasses(selectIndex) {
  cardSlides.forEach(c => c.classList.remove('card-selecionado','card-anterior','card-proximo'));
  if (cardSlides[selectIndex]) cardSlides[selectIndex].classList.add('card-selecionado');
  if (cardSlides[selectIndex - 1]) cardSlides[selectIndex - 1].classList.add('card-anterior');
  if (cardSlides[selectIndex + 1]) cardSlides[selectIndex + 1].classList.add('card-proximo');
}

const inicial = document.querySelector('input.navegar-slide:checked');
const inicialIdx = inicial ? parseInt(inicial.value, 10) - 1 : 0;
atualizarClasses(inicialIdx);

let intervaloSlide; 

function autoNavegacao(){
  let indexCorrente = inicialIdx
  const radioBotoes = document.querySelectorAll("input.navegar-slide");
  const total = radioBotoes.length; 

  intervaloSlide = setInterval(() => {
    indexCorrente = (indexCorrente + 1) % total;
    radioBotoes[indexCorrente].checked = true; 
    atualizarClasses(indexCorrente)},
    2000);
}
  
  nav.addEventListener('change', (e) => {
    if (e.target && e.target.matches('input.navegar-slide')) {
      clearInterval(intervaloSlide); 
      const selectIndex = parseInt(e.target.value, 10) - 1;
      atualizarClasses(selectIndex);
    }
  });

autoNavegacao()
});
