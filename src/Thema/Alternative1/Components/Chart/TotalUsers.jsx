import React, { Component } from "react";
import Chart from "react-apexcharts";

class TotalUsers extends Component {

    constructor(props) {
        super(props);

        this.success = {
            options: {
                chart: {
                    sparkline: {
                        enabled: true // only lines will be shown
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 20,
                        left: 0,
                        blur: 4,
                        color: '#000',
                        opacity: 0.05
                    }
                },
                colors: ['#EFCA00'],
                // fill: {
                //     type: "gradient",
                //     gradient: {
                //         shadeIntensity: 1,
                //         opacityFrom: 0.7,
                //         opacityTo: 0.9,
                //         stops: [0, 90, 100]
                //     }
                // },

                xaxis: {

                    type: 'datetime',
                    categories: ["1", "2", "3", "4", "5", "6", "7", "8"]
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,

                }
            },
            series: [
                {
                    name: "series-1",
                    data: [10, 23, 18, 34, 15, 43, 24, 15]
                },
            ]
        };
    }

    render() {
        return (


            <Chart
                options={this.success.options}
                series={this.success.series}
                type="line"
                width="70%"

            />
        );
    }
}

export default TotalUsers;