const nextStep = document.getElementById("nextStep").style.display = "none";

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("mensagem").value;
  let error = document.getElementById("error");

 
  const data = {nome , email, msg}; 

  const result = await  (
    console.log(data)
  )
  if(result){
    error.textContent = "formulario enviado com sucesso";
    console.log("formulario enviado com sucesso");
  }else{
    error.textContent = "formulario não enviado";
    console.log("erro validação");
  }

});