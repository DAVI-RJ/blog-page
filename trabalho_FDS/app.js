let bt = document.querySelector('#bt');
//let msg = document.querySelector('#msg')

bt.addEventListener('click', () => {
    saudacao();
    //novaPagina();
});
    function saudacao(){
        var nome = document.getElementById('nome').value;
        const valorInput = document.getElementById('nome').value;
            if(nome === "")
                alert ('digite um nome');        
            else {
                localStorage.setItem('nomeVisitante',valorInput);
                window.location.href = "pagina1.html";
            }
    }
                /*novaPagina(valorInput);
                setTimeout(() => {
                    window.location.href = "pagina1.html";
                }, 3000);                         
        }
    function novaPagina(valorInput){ 
    //const novaJanela = document.getElementById('msg');          
        msg.innerHTML = valorInput + ", " + "seja bem-vindo";
        setTimeout(() => msg.remove(), 3000);    
    }   */ 
   /* 
    Window.addEventListener('BeforeUnload',e=>{
        if(!saudacao);
    }
    )*/
//var nome = Input ;
        //var nome = document.getElementById('nome').value;
        /*bt.addEventListener('keydown', e => {
            //var nome = document.getElementById('nome').value;
                if ((e.key = "Enter") )//|| nome === !null || nome === MouseEvent)
                    msg.innerHTML = "seja bem-vindo";
                    //alert ("oi");
                });
        */
/*var nome = document.getElementById('nome').value;
var nomeInput = 
     bt.addEventListener('click', e =>{
        msg.innerHTML = nome + " " +"seja bem-vindo";
});
/*
bt.addEventListener('click', saudacao);
    function saudacao(e){
        var nome = document.getElementById('nome').value;
        if (//nome === "" || nome === "digite seu nome aqui" || 
            nome === (onmouseout))
            alert ('digite um nome')
        else {
            msg.innerHTML = "seja bem-vindo";
            setTimeout(() => msg.remove(), 3000);
        }
    }
        /*if(nome === "")
            alert ('digite um nome.');
        else
            alert ('seja bem-vindo');
        }
    /*e =>{
    if(nome === "")
        alert('digite o seu nome'); 
    else
        alert("seja bem-vindo");
        //msg.innerHTML = [nome]+" "+"seja bem-vindo";
        //setTimeout(() => msg.remove(), 3000);
       
    }
);*/