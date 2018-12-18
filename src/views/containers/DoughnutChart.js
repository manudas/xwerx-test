import React, {Component} from 'react';
import Chart from 'chart.js';

class DoughnutChart extends Component {
    componentDidMount () {
        let chartCanvas = this.refs.doughnutchart;

        let myChart = new Chart(chartCanvas, {
            type: 'doughnut',
            data: this.props.data,
            options: {
                circumference: 1 * Math.PI
            }
        });
        this.setState({chart: myChart});
    }
    componentDidUpdate () {
        let chart = this.state.chart;
        let data = this.props.data;
        
        if (data) {
            data.datasets.forEach((dataset, i) => chart.data.datasets[i].data = dataset.data);

            chart.data.labels = data.labels;
            chart.update();
        }
    }
    render () {
        return (
            <canvas className="col-12 col-sm-4" ref={'doughnutchart'} height={'150'} ></canvas>
        );
    }
}

export default DoughnutChart;