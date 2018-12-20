import React, {Component} from 'react';

import { connect } from 'react-redux'

import Client from '../component/Client';
import Sale from '../component/Sale';
import DataType from '../../utils/DataType'
import {isEmpty} from '../../utils/Object'

import DataRowContainerTopBar from './DataRowContainerTopBar';

import * as DataTransformation from '../../controllers/DataTransformation';

class DataRowContainer extends Component {
    
    render(){
        let composedValue = [];
        if (!isEmpty(this.props.rawData)) {
            if (this.props.DataType == DataType.clients) {
                this.props.clients.forEach((client, i) => {
                    let clientComponent = <Client data={client} key={i} />;
                    composedValue.push(clientComponent);
                });
            } else if (this.props.DataType == DataType.sales) {
                this.props.sales.forEach((sale, i) => {
                    composedValue.push(<Sale data={sale} key={i} />);
                });
            }
        }
        return (
            <div className="container rounded bg-green mt-5 p-4">
                <DataRowContainerTopBar />
                <hr className="bg-light" />
                {composedValue}

            </div>
        );
    }
}


const mapStateToProps = function(state) { 
    return {
        rawData: state.SetDataReducer.data,
        DataType: state.SetDataTypeReducer.dataType,
        clients: 
            state.SetDataReducer.data &&
            state.SetDataReducer.data.clients
            && state.SetDataReducer.data.sales ?
                DataTransformation.linkClientWithSales(state.SetDataReducer.data).clients : null,
        sales: 
            state.SetDataReducer.data &&
            state.SetDataReducer.data.clients
            && state.SetDataReducer.data.sales ? 
                DataTransformation.linkSalesWithClient(state.SetDataReducer.data).sales : null
    }
}

export default connect(
    mapStateToProps,
    null,
)(DataRowContainer)
