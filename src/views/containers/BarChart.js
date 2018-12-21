import React, {Component} from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux'

import {getLastSales} from '../../controllers/DataTransformation';

/**
 * Component used to render the list of the last 12 sales amounts
 */
class BarChartClass extends Component {

    /**
     * Executed once the component was mount
     */
    componentDidMount () {
        let chartCanvas = this.refs.linechart;

        let data = this.buildDataSet();

        let myChart = new Chart(chartCanvas, {
            type: 'bar',
            data: data,
            options: {
                legend: { display: false },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        // Change here
                        barPercentage: 0.8
                    }]
                }
            }
        });
        this.setState({chart: myChart});
    }

    /**
     * Executed once the component was updated
     */
    componentDidUpdate () {
        let chart = this.state.chart;
        let data = null;
        if (this.props.last12sales && (this.props.last12sales.length > 0)) {
            data = this.buildDataSet();
        }

        if (data) {
            data.datasets.forEach((dataset, i) => {
                chart.data.datasets[i].data = dataset.data
            });
            
            chart.data.labels = data.labels;
            chart.update();
        }
    }
    render () {
        return (
            <div className="col col-12 col-sm-4 mt-auto">
                <div className="row">
                    <div className="col">
                        <canvas ref={'linechart'} height={'150'} ></canvas>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col text-light adaptative_text">
                        LAST 12 MOUNTS
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Builds the necessary data set used
     * to render the chart
     */
    buildDataSet(){
        const dataSetData = [];
        if (this.props.last12sales && this.props.last12sales.length > 0) {
            const reversed12Sales = this.props.last12sales.reverse();
            reversed12Sales.forEach(sale => {
                if (!sale) {
                    dataSetData.push(0);
                } else {
                    dataSetData.push(parseFloat(sale.amount));
                }
            });
        }
        const data = 
        {
            //labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            labels: Array(12).fill(""),
            datasets: [
                {
                    // label: "Population (millions)",
                    backgroundColor: Array(12).fill("#67a3e7"),
                    data: dataSetData
                }
            ]
        };
        return data;        
    }
}

const mapStateToProps = function (state) {
    return ({
        last12sales: getLastSales(state.SetDataReducer.data, 12, 0)
    });
}

export default connect(
    mapStateToProps,
    null,
)(BarChartClass)
