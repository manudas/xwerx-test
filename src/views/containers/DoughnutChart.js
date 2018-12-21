import React, {Component} from 'react';
import { connect } from 'react-redux'
import Chart from 'chart.js';

import DataType from '../../utils/DataType'

import * as DataTransformation from '../../controllers/DataTransformation';


/**
 * Componet used to draw either the data with the very important clients
 * or the sales from the most important clientes, depending on the
 * DataType that was selected before
 */
class DoughnutChart extends Component {
    componentDidMount () {
        let chartCanvas = this.refs.doughnutchart;

        let innerText = '';
        let data = null;
        if (this.props.DataType && (this.props.clients || this.props.sales)) {
            data = this.buildDataSet();
            if (data.datasets[0].data[0]) {
                innerText = data.datasets[0].data[0];
            }
        }

        const options = {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 13
                }
            },
            elements: {
                center: {
                    text: innerText,
                    color: '#36A2EB', //Default black
                    fontStyle: 'Helvetica', //Default Arial
                    sidePadding: 15, //Default 20 (as a percentage)
                }
            }
        };

        
        let myChart = new Chart(chartCanvas, {
            type: 'doughnut',
            data: data,
            options: options
        });

        this.setState({chart: myChart});
    }
    componentDidUpdate () {
        let chart = this.state.chart;

        let data = null;
        if (this.props.DataType && (this.props.clients || this.props.sales)) {
            data = this.buildDataSet();
        }
        
        if (data) {
            let innerText = '';
            if (data.datasets[0].data[0]) {
                innerText = data.datasets[0].data[0];
                chart.options.elements.center.text = innerText;
            }
            chart.data = data;
            chart.update();
        }
    }
    render () {
        return (
            <div className="col col-12 col-sm-4 mt-auto">
                <div className="row">
                    <div className="col">
                        <canvas ref={'doughnutchart'} height={'150'} ></canvas>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col text-light adaptative_text">
                        {(this.props.DataType == DataType.clients) && this.props.clients ? 
                            'VERY IMPORTANT CLIENTS' : 
                                (this.props.DataType == DataType.clients) && this.props.sales ? 
                                    'SALES FROM VIP CLIENTS' : ''}
                    </div>
                </div>
            </div>

        );
    }

    buildDataSet(){
        const data = {};
        const data_arr = [];
        if(this.props.DataType == DataType.clients) {
            data.labels = ['Important customers', 'Rest of customers'];
            let dataSet = DataTransformation.veryImportantClients(this.props.rawData);
            data_arr.push(dataSet.veryImportantClients);
            data_arr.push(dataSet.rest);
        } else if (this.props.DataType == DataType.sales) {
            data.labels = ['Sales from important customers', 'Rest of sales'];
        }

        let dataSets = 
        [
            {
                data: data_arr,
                backgroundColor: [
                    '#67a3e7',
                    '#4b545d'
                ],
                hoverBackgroundColor: [
                    '#5567a3e7',
                    '#554b545d'
                ]
            }
        ];
    
        data.datasets = dataSets;
        return data;        
    }

    mergeChartConfig(defaults,userDefined){
        var returnObj = {};
        for (var attrname in defaults) { returnObj[attrname] = defaults[attrname]; }
        for (var attrname in userDefined) { returnObj[attrname] = userDefined[attrname]; }
        return returnObj;
    }
}

const mapStateToProps = function(state) { 
    return {
        rawData: state.SetDataReducer.data,
        DataType: state.SetDataTypeReducer.dataType,
        clients: 
            state.SetDataReducer.data &&
            state.SetDataReducer.data.clients ?
                DataTransformation.veryImportantClients(state.SetDataReducer.data) : null,
        sales: 
            state.SetDataReducer.data &&
            state.SetDataReducer.data.clients ? 
                DataTransformation.salesFromVeryImportanClients(state.SetDataReducer.data) : null
    }
}

Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
            //Get ctx from string
            var ctx = chart.chart.ctx;

            //Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
            //Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight);
            fontSizeToUse /= 2; // Half doughnut chart

            //Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            // var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            let bottom_text = chart.chartArea.bottom - (fontSizeToUse/2) + sidePadding;
            ctx.font = fontSizeToUse+"px " + fontStyle;
            ctx.fillStyle = color;

            //Draw text in center
            ctx.fillText(txt, centerX, bottom_text);
        }
    }
});

export default connect(
    mapStateToProps,
    null,
  )(DoughnutChart)