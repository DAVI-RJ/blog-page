const dashboard = document.getElementById("primeiroDashBoard");
const twoDashboard = document.getElementById("segundoDashBoard")

const data = {
	labels: ["FDS","F.Design S","FSI", "LPA"],
	datasets: [{
		label: 'ADS',
		data: [0.82, 0.9, 0.94, 0.91],
		backgroundColor: 'rgba(59, 211, 211, 0.2)',
		borderColor: 'rgba(33, 187, 187, 1)',
		borderWidth: 2
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
	type: 'bar', 
	data: data,
	options: options
});

const twoData = {
	datasets: [{
		label: 'FullStack web',
		data: [
			{x:"05-2025", y: 1},
			{x:"08-2025", y: 1},
			{x:"10-2025", y: 1}
		],
		backgroundColor: 'rgba(59, 211, 211, 0.2)',
		borderColor: 'rgba(33, 187, 187, 1)',
		borderWidth: 2,
		
	}],
}

const twoOptions = {
	responsive: true, 
	type: "time",
	scales: {
	
		y: {
			min: 0.9,
			max: 1.1,
		}
	}
}

new Chart(segundoDashBoard, {
	type: 'line',
	data: twoData,
	options: twoOptions
});