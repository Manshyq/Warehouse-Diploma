const ctxOverview = document.getElementById('overviewChart').getContext('2d');
const overviewChart = new Chart(ctxOverview, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Monthly Earning',
            data: [12, 19, 3, 5, 2, 3, 35, 10, 13, 17, 28, 24], // Replace with your data
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxCustomers = document.getElementById('customersChart').getContext('2d');
const customersChart = new Chart(ctxCustomers, {
    type: 'doughnut',
    data: {
        labels: ['Total New Customers', 'Returning Customers'],
        datasets: [{
            label: 'Customer Type',
            data: [65, 35], // Replace with your data
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    }
});
