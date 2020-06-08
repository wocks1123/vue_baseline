<template>
    <div>
        hello chart
        <bar-chart
            :data="chartData"
            :options="chartOptions"
        ></bar-chart>
    </div>
</template>

<script>
    import 'tui-chart/dist/tui-chart.css'
    import { lineChart } from '@toast-ui/vue-chart'

    export default {
        name: "ToastChart",
        components: {
            'bar-chart': lineChart
        },
        data() {
            return {
                chartData: { // for 'data' prop of 'bar-chart'
                    categories: ['July', 'Aug', 'Sep', 'Oct', 'Nov'],
                    series: [
                        {
                            name: 'Budget',
                            data: [3000, 5000, 7000, 6000, 4000]
                        },
                        {
                            name: 'Income',
                            data: [1000, 7000, 2000, 5000, 3000]
                        }
                    ]
                },
                chartOptions: {
                    chart: {
                        //width: 100
                    },
                    yAxis: {
                        title: 'Blood Type'
                    },
                    xAxis: {
                        title: {
                            text: 'Recipient(people)',
                            offsetX: 700
                        }
                    },
                    legend: {
                        visible: false
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>