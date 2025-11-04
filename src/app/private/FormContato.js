emailjs.init({
  publicKey: "API"
}); 

window.onload = function () {
  formulario.addEventListener("submit",(e) => {
  e.preventDefault();
  
  emailjs.sendForm("serviço ID","templete id", this)
    .then(function(){
      const msgSucesso = document.getElementById("msgSucesso"); 

      msgSucesso.textContent = <p>"Formulario enviado com Sucesso!</p>
    }, function(error){
      alert("erro ao enviar o formulario: " + JSON.stringify(error));
    });
  });
}