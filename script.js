// Dark Mode Function
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Chart.js Example
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Amit', 'Archit', 'Dev'],
    datasets: [{
      label: 'Progress (%)',
      data: [75, 50, 90],
      backgroundColor: ['#4CAF50', '#2196F3', '#FF9800']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});