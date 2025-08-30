document.addEventListener('DOMContentLoaded', () => {
  /*botao para navegar*/
  const btn = document.querySelector("#btnHome")?.addEventListener("click", () => {
      window.location.href = "../../index.html";
  });
    
  const nextStep = document.querySelector("#nextStep")?.addEventListener("click", () => {
    const urlAtual = window.location.pathname; 
      if(urlAtual.includes("formacaoAcademica")){
        window.location.href = "../../index.html";
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
  } else {
    console.error("Element(s) for footer javascript not found.");
  }


  let anoAtual = document.getElementById("ano-atual");

  function dataFooter(){
    const dataAtual = new Date();
    const anoData = dataAtual.getFullYear();

      anoAtual.innerHTML = anoData;
    }
  dataFooter();
});