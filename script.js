let resistanceValues = [];
let efficiencyValues = [];

const ctx = document.getElementById('effChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: resistanceValues,
        datasets: [{
            label: 'Efficiency η',
            data: efficiencyValues,
            borderColor: 'blue',
            borderWidth: 2,
            fill: false
        }]
    },
    options: { responsive: true }
});

function updateChart(R, eff) {
    resistanceValues.push(R);
    efficiencyValues.push(eff);
    chart.update();
}

function runSimulation() {
    const R = parseFloat(document.getElementById("resistance").value);
    const result = computeValues(R);

    document.getElementById("vp").innerText = result.Vp.toFixed(2);
    document.getElementById("ip").innerText = result.Ip.toFixed(3);
    document.getElementById("pin").innerText = result.Pin.toFixed(3);
    document.getElementById("vs").innerText = result.Vs.toFixed(2);
    document.getElementById("is").innerText = result.Is.toFixed(3);
    document.getElementById("pout").innerText = result.Pout.toFixed(3);
    document.getElementById("eff").innerText = result.efficiency.toFixed(3);

    updateChart(R, result.efficiency);
}


