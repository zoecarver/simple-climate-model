import Chart from 'chart.js';
import data from '../formulas';
import chartColors from './chartColors';

export default () => {
  const ctx = document.getElementById("chart").getContext('2d');
  const chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: data.labels,
          datasets: [{
            type: 'line',
            label: 'Temprature: Celsius',
            data: data.c,
            borderWidth: 1,
            borderColor: chartColors.red,
          }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'e (atmosphere absorbation)'
            }
          }
          ],
          yAxes: [{
            ticks: {
                beginAtZero:true
            },
            scaleLabel: {
              display: true,
              labelString: 'Celcius'
            }
          }]
        }
      }
  });
}