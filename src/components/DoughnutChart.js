import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: ['data'],
  mounted () {
    this.renderChart(
      this.data,
      { responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      })
  }
}
