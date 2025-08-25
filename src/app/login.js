let enventoForm = document.getElementById("enventoForm");
let msg = document.getElementById("msg")

const checkTermo = document.getElementById("aceiteTermos");

function aceiteTermos() {
	enventoForm.addEventListener("submit", (e) => {
		if(!checkTermo.checked){
				e.preventDefault();
				msg.innerHTML = "<p>Os termos devem ser aceito<p>";
				window.setTimeout(() => {
					msg.innerHTML = "";
				}, 2000);
		}else{
			console.log("vaidação dos dados")
		}
	});
}
aceiteTermos()

/*termos de privacidade */
let termo = document.getElementById("termos");
let showTermo = document.getElementById("showTermo");
let isTermo = false;

termo.addEventListener('click', () => {
	if(isTermo === false){
		isTermo = true;
	}else{
		isTermo = false;
	}
  
	showTermo.style.display = (isTermo)? "block" : "none";
	
});
