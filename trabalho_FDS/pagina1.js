const valorInput = localStorage.getItem('nomeVisitante');
const msg = document.getElementById('msg');
    if (valorInput) {
    msg.innerHTML = valorInput+", "+'seja bem-vindo';
    setTimeout(() => msg.remove (), 5000);
    localStorage.removeItem('nomevisitante');
    // Se quiser limpar depois, use: 
    // setTimeout(() => msg.remove(), 3000);
    // 
}   