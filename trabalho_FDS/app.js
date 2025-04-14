let bt = document.querySelector('#bt');
let msg = document.querySelector('#msg')

bt.addEventListener('click', saudacao );
    function saudacao(){
        var nome = document.getElementById('nome').value;
        const valorInput = document.getElementById('nome').value;
            if(nome === "")
                alert ('digite um nome');        
            else {
                msg.innerHTML = valorInput+", "+'seja bem-vindo';
                setTimeout(() => msg.remove(),2000);
                setTimeout(() =>{window.location.href = "pagina1.html"}, 2000);                                      
        }   
    };
