var lineChart = document.getElementById('lineChart');
var myLineChart = new Chart(lineChart, {
  type:'line',
  data: {
    labels: ['2014','2015', '2016','2017'],
    datasets: [
      {
        label: 'Deserción',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rbga(75, 75, 120, 0.4)',
        borderColor: 'rbga(75, 75, 120, 1)',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointBorderColor: 'rbga(75, 75, 120, 1)',
        poinBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rbga(75, 75, 120, 1)',
        pontHoverBorderColor: 'rbga(75, 75, 120, 0.4)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [25, 32, 14, 20]
      }
    ]
  }
});

var ctx = document.getElementById("myChart");

var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF4394",
                "#36A2EB",
                "#FFCE56"
            ]


        }]
};

var options = {
	cutoutPercentage:40,
};


var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});
