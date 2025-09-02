document.addEventListener('DOMContentLoaded', () => {
  /*botao para navegar*/
  const btn = document.querySelector("#btnHome")?.addEventListener("click", () => {
      window.location.href = "../../index.html";
  });
    
  const nextStep = document.querySelector("#nextStep")?.addEventListener("click", () => {
    const urlAtual = window.location.pathname; 
      if(urlAtual.includes("formacaoAcademica")){
        window.location.href = "Portifolio.html";
      }else if(urlAtual.includes("Portifolio")){
        window.location.href = "Sobre.html";
      }else if(urlAtual.includes("Sobre")){
        window.location.href = "contato.html";
      }else if(urlAtual.includes("contato")){
        nextStep.style.display = "none";
      }     
  }); 
 

  /*footer javascript*/
  let termo = document.getElementById("termos");
  let showTermo = document.getElementById("mostrarTermo");
  let isTermo = false;

  if (termo && showTermo) {
    termo.addEventListener('click', () => {
      isTermo = !isTermo;
      showTermo.style.display = (isTermo) ? "block" : "none";
    });
  } 

  let anoAtual = document.getElementById("ano-atual");

  function dataFooter(){
    const dataAtual = new Date();
    const anoData = dataAtual.getFullYear();

      anoAtual.innerHTML = anoData;
    }
  dataFooter();
});