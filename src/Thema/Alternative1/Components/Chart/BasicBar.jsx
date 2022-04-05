import React, { Component } from "react";
import Chart from "react-apexcharts";
class BasicBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            series: [{
                data: [21, 22, 10, 28, 16, 21, 13]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    sparkline: {
                        enabled: false // only lines will be shown
                    },
                    toolbar: {
                        show: false // top-right icons 
                    },
                },
                plotOptions: {
                    bar: {
                        borderRadius: 8,
                        columnWidth: 25,
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
                colors: ['#FF0000'],
                toolbar: {
                    show: false,
                }
            },
        };
    }
    render() {
        return (


            <Chart
                options={this.state.options} series={this.state.series} type="bar" height="500px"
            />
        );
    }
}

export default BasicBar;


