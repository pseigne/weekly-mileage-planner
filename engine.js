let myChart;
let goalmileage = 0;
let mileagePerDay = {
    "Monday": 0,
    "Tuesday": 0,
    "Wednesday": 0,
    "Thursday": 0,
    "Friday": 0,
    "Saturday": 0,
    "Sunday": 0
}

let remainingMileage = 0;

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


function displayPage() {
    let daysHTML = "";
    for (let i = 0; i < days.length; i++) {
        daysHTML += `
                <div class="day">
                    <label for="${days[i]}">${days[i]}</label>
                    <input id="${days[i]}" type="number" min="0" oninput="calculateMileage()">
                </div>
           `
    }
    document.getElementById("days").innerHTML = daysHTML;
}


window.addEventListener("DOMContentLoaded", () => {
    // Display Days of Week
    const ctx = document.getElementById('myChart');
    const currentData = days.map(day => mileagePerDay[day]);

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [{
                label: 'Mileage',
                data: currentData,
                borderWidth: 1,
                backgroundColor: '#36A2EB'
            }]
        },
        options: {
            scales: {
                y: { 
                    beginAtZero: true,
                    grid: { color: 'rgba(0, 0, 0, 0.1)' },
                    ticks: { color: '#666' }
                },
                x: {
                    grid: { color: 'rgba(0, 0, 0, 0.1)' },
                    ticks: { color: '#666' }
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#666' }
                }
            }
        }
    });

    displayPage();

    document.getElementById("goal-mileage").addEventListener("input", calculateMileage);
});

function calculateMileage() {
    for (let day of days) {
        let input = document.getElementById(day).value;

        // If input is empty string OR is not a number, set to 0. Otherwise, parse it.
        mileagePerDay[day] = (input === "" || isNaN(input)) ? null : parseFloat(input);
        console.log(day, mileagePerDay[day]);
    }
    calculateRemaining(mileagePerDay);
    updateChart();
}


function calculateRemaining(mileagePerDay) {

    goalmileage = parseFloat(document.getElementById("goal-mileage").value)

    let totalRun = 0;

    for (let day of days) {
        totalRun += mileagePerDay[day];
    }
    remainingMileage = goalmileage - totalRun;
    document.getElementById("remaining-mileage").innerHTML = isNaN(remainingMileage) ? 0 : remainingMileage;
}

// Initilize array for days with zero miles 
function distributeRemaining() {
    let zeroDays = [];

    for (let day of days) {
        if (mileagePerDay[day] == null) {
            zeroDays.push(day);
        }
    }

    if (zeroDays.length < 1) {
        return;
    }

    let remainingMileagePerDay = parseFloat(remainingMileage / zeroDays.length)

    for (let day of zeroDays) {
        mileagePerDay[day] = remainingMileagePerDay;
        document.getElementById(day).value = remainingMileagePerDay;
    }
    // Update chart/HTML once after loop finishes
    updateHTMLAfterDistribution();
}

function updateHTMLAfterDistribution() {
    // Input values are already updated in the loop above via .value
    // We just need to ensure the logic flows correctly
    calculateMileage(); // Recalculate totals and chart
}


function updateChart() {
    // 2. Target the variable 'myChart' defined above

    // Updated Data
    let updatedData = days.map(day => mileagePerDay[day]);

    myChart.data.datasets[0].data = updatedData;

    // re render the chart
    myChart.update();
}

// --- NEW DARK MODE FUNCTION ---
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Check if dark mode is active
    const isDark = document.body.classList.contains('dark-mode');
    
    // Define colors based on mode
    const textColor = isDark ? '#ffffff' : '#666666';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

    // Apply colors to Chart
    if (myChart) {
        // Update Scales (Axes)
        myChart.options.scales.x.ticks.color = textColor;
        myChart.options.scales.y.ticks.color = textColor;
        myChart.options.scales.x.grid.color = gridColor;
        myChart.options.scales.y.grid.color = gridColor;
        
        // Update Legend
        myChart.options.plugins.legend.labels.color = textColor;
        
        myChart.update();
    }

    // Update button icon if you have one with id="theme-toggle"
    const btn = document.getElementById('theme-toggle');
    if(btn) btn.textContent = isDark ? '☀️' : '🌙';
}