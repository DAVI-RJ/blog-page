const dashboard = document.getElementById("linhaDeTempo");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("foi clicado")
  btn.style.background = "blue"
});

const data = {
  labels: ["fevereiro", "janeiro", "abril"],
  datasets: [{
        label: 'Vendas',
        data: [10, 25, 15],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
}

const options = {
    responsive: true, 
    scales: {
        y: {
            beginAtZero: true 
        }
    }
};

new Chart(dashboard, {
    type: 'bar', // Tipo de gráfico (bar, line, pie, etc.)
    data: data,
    options: options
});