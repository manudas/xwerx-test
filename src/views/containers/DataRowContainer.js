import React, {Component} from 'react';

import { connect } from 'react-redux'

import Client from '../component/Client';
import Sale from '../component/Sale';
import DataType from '../../utils/DataType'

import DataRowContainerTopBar from './DataRowContainerTopBar';

class DataRowContainer extends Component {
    
    render(){
        let composedValue = ''; // it is better with arrays
        if (this.props.data) {
            this.props.data.array.forEach(element => {
                if (this.props.DataType == DataType.clients) {
                    composedValue += <Client data={element} />;
                } else if (this.props.DataType == DataType.sales) {
                    composedValue += <Sale data={element} />;
                }
            });
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
    return {data : state.LoadDataReducer.data}
}

export default connect(
  mapStateToProps,
  null,
)(DataRowContainer)
