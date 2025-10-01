document.addEventListener('DOMContentLoaded', () => {
  const menuHeader = document.getElementById("menu-navegacao-site");
  const botaoMenuHeader = document.getElementById("botao-menu-site");

  if(menuHeader && botaoMenuHeader){
    let mostrarMenu = botaoMenuHeader.getAttribute("aria-expanded") === "true";
    botaoMenuHeader.addEventListener("click", () => {
      mostrarMenu = !mostrarMenu
      
      console.log(mostrarMenu)
      if(mostrarMenu){
        menuHeader.classList.toggle("menu-ativo")
      }else{
        menuHeader.classList.remove("menu-ativo")
      }
      menuHeader.setAttribute("aria-expanded", mostrarMenu.toString());
      console.log(menuHeader)
    });
  }

  /* #FORMULARIO INTERAÇÃO*/
  const abrirForm = document.getElementById("abrir-formulario");
  const contexto = document.getElementById("formulario-contato");

  if(abrirForm && contexto) {
    abrirForm.addEventListener("click", () => {
    contexto.classList.add("ativo");
  /*#CARREGANDO CONTEÚDO ESTATICO: OK*/
    fetch("src/pages/FormularioContato.html")
      .then(response => {
        if(!response.ok){
          throw new error("Erro ao carregar o formulário");
          
        }
        return response.text()
      })      
      .then(html => {
        document.getElementById("conteudo-do-formulario").innerHTML = html;

        const fecharForm = document.getElementById("fechar-formulario");
        if (fecharForm) {
          fecharForm.addEventListener("click", () => {
            contexto.classList.remove("ativo");
          });
        }

        contexto.addEventListener("click", (event) => {
          if (event.target === contexto) {
            contexto.classList.remove("ativo");
          }
        });
      });
    });
  }
  

  const mostrarIntens = document.getElementById("mostrar-todos");
  const todosIntens = document.getElementsByClassName("escondido");
  let isMostrado = false

  if(mostrarIntens && todosIntens){
    function mostrandoTodosIntens() {
      mostrarIntens.addEventListener("click", () => {

      isMostrado = !isMostrado

      for (let i = 0; i < todosIntens.length; i++) {
        todosIntens[i].style.display = isMostrado ? "block" : "none";
        }
      });
    }
    mostrandoTodosIntens()
  }
  /*# FOORTER INTERAÇOES*/
  const termo = document.getElementById("termos");
  const showTermo = document.getElementById("mostrar-termo");

  if (termo && showTermo) {
  let isTermo = false;
    termo.addEventListener("click", () => {
      isTermo = !isTermo;
      showTermo.style.display = isTermo ? "block" : "none";
    });
  } 

  const anoAtual = document.getElementById("ano-atual");
  if(anoAtual){
  function dataFooter(){
    const dataAtual = new Date();
    const anoData = dataAtual.getFullYear();

      anoAtual.innerHTML = anoData;
    }
  dataFooter();
  }
});

