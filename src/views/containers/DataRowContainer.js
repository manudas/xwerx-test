import React, {Component} from 'react';

import Client from '../component/Client';
import Sale from '../component/Sale';

import DataRowContainerTopBar from './DataRowContainerTopBar';

class DataRowContainer extends Component {

    static DataType = Object.freeze(
        {
            "clients":1, 
            "sales":2
        }
    )
    
    render(){
        let composedValue = ''; // it is better with arrays
        if (this.props.data) {
            this.props.data.array.forEach(element => {
                if (this.props.DataType == DataRowContainer.DataType.clients) {
                    composedValue += <Client data={element} />;
                } else if (this.props.DataType == DataRowContainer.DataType.sales) {
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

export default DataRowContainer;