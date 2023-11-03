import Chart from 'chart.js/auto';
const data = {
    labels: ['april', 'may', 'jun', 'jul', 'aug', 'sep'],
    datasets: [{
        axis: 'y',
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207)'
        ],
        borderColor: [
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 2
    }]
};

const stackedLine = new Chart(document.getElementById('myChart'), {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                stacked: true
            }
        }
    }
});
const stackedLineTwo = new Chart(document.getElementById('myChart_mini'), {
    type: 'line',
    data: data,
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});




// const chart = new Chart(document.getElementById('myChart'), {
//     type: 'line',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     options: {
//         onClick: (e) => {
//             const canvasPosition = getRelativePosition(e, chart);

//             // Substitute the appropriate scale IDs
//             const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
//             const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
//         }
//     }
// });
const config = {
    type: 'line',
    data: data,
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
};