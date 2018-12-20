import React, {Component} from 'react';
import { connect } from 'react-redux'
import Chart from 'chart.js';

import DataType from '../../utils/DataType'

import * as DataTransformation from '../../controllers/DataTransformation';

class DoughnutChart extends Component {
    componentDidMount () {
        let chartCanvas = this.refs.doughnutchart;

        let data = this.props.data;

        data = this.buildDataSet();

        let myChart = new Chart(chartCanvas, {
            type: 'doughnut',
            data: data,
            options: {
                circumference: 1 * Math.PI
            }
        });
        this.setState({chart: myChart});
    }
    componentDidUpdate () {
        let chart = this.state.chart;


        let data = this.props.data;

        if(this.props.DataType == DataType.clients) {
            data = this.buildDataSet();
        } else if (this.props.DataType == DataType.sales) {
            data = this.buildDataSet();
        }
        
        
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

    buildDataSet(){
        const data = {
            labels: [
                'question1',
                'question2',
                'question3',
                'question4',
                'question5'
            ],
            datasets: [
                {
                    data: [10.1, 2, 22.1],
                    backgroundColor: [
                        'orange',
                        'blue',
                        'red',
                        'purple',
                        'green'
                    ],
                    hoverBackgroundColor: [
                        'orange',
                        'blue',
                        'red',
                        'purple',
                        'green'
                    ]
                }
            ]
        };
        return data;        
    }
}

const mapStateToProps = function(state) { 
    return {
        DataType: state.SetDataTypeReducer.dataType,
        clients: 
            state.SetDataReducer.data &&
            state.SetDataReducer.data.clients
            && state.SetDataReducer.data.sales ?
                DataTransformation.veryImportantClients(state.SetDataReducer.data).clients : null,
        sales: 
            state.SetDataReducer.data &&
            state.SetDataReducer.data.clients
            && state.SetDataReducer.data.sales ? 
                DataTransformation.salesFromVeryImportanClients(state.SetDataReducer.data).sales : null
    }
}

export default connect(
    mapStateToProps,
    null,
  )(DoughnutChart)