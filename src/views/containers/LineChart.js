import React, {Component} from 'react';
import Chart from 'chart.js';

class LineChartClass extends Component {
    componentDidMount () {
        let chartCanvas = this.refs.linechart;

        let myChart = new Chart(chartCanvas, {
            type: 'line',
            data: this.props.data,
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }
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

    buildDataSet(){
        const data = 
        {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    data: [2478,5267,734,784,433]
                }
            ]
        };
        return data;        
    }
}

export default LineChartClass;