<script>
/* eslint-disable */
import {Line} from 'vue-chartjs'
export default {
    extends: Line,
    data(){
        return{
            datacollection : {
                labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets : [{
              label: 'Data One',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
            }]
            }
        }
    },
    options:{
    scales: {
        yAxes: [{
            ticks: {
            beginAtZero: true
            },
            gridLines: {
            display: true
            }
            }],
        xAxes: [ {
            gridLines: {
            display: false
            }
            }]
        },
        legend: {
            display: true
        },
        responsive: true,
        maintainAspectRatio: false,
        height:200
    },
    mounted(){
        this.renderChart(this.datacollection, this.options)
    }
}
</script>

<style>

</style>
