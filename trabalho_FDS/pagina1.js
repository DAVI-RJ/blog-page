const valorInput = localStorage.getItem('nomeVisitante');
const msg = document.getElementById('msg');
    if (valorInput) {
    msg.innerHTML = valorInput+", "+'seja bem-vindo';
    setTimeout(() => msg.remove (), 5000);
}   