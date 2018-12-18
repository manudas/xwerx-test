import React, {Component} from 'react';
import Chart from 'chart.js';

class LineChartClass extends Component {
    componentDidMount () {
        let chartCanvas = this.refs.linechart;

        let myChart = new Chart(chartCanvas, {
            type: 'line',
            data: this.props.data,
            options: {
                
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
            <canvas className="col-12 col-sm-4" ref={'linechart'} height={'150'} ></canvas>
        );
    }
}

export default LineChartClass;