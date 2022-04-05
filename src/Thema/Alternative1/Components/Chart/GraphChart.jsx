import React, { Component } from "react";
import Chart from "react-apexcharts";

class GraphChart extends Component {

    constructor(props) {
        super(props);

        this.success = {
            options: {
                chart: {
                    sparkline: {
                        enabled: false // only lines will be shown
                    },
                    toolbar: {
                        show: false // top-right icons 
                    },
                    height: 350,
                    type: 'area',
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 20,
                        left: 0,
                        blur: 4,
                        color: '#000',
                        opacity: 0.05
                    },
                },
                colors: ['#6c5ffc'],
                fill: {
                    type: 'solid',
                    // opacity: [0.35, 1],
                },
                dataLabels: {
                    enabled: false
                },

                stroke: {
                    curve: 'smooth'
                },
                labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
                grid: {
                    show: true,
                    padding: {
                        left: 0,
                        right: 0
                    },
                    strokeDashArray: 4,    // you can either change hear to disable all grids

                },
            },
            series: [{
                name: 'Başarısız',
                data: [10, 20, 15, 30, 22, 40, 15],
                type: 'line',
            }],
        };
    }

    render() {
        return (


            <Chart
                options={this.success.options}
                series={this.success.series}
                type="area"
                height="500px"

            />
        );
    }
}

export default GraphChart;