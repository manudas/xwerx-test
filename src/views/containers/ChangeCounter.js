import React, {Component} from 'react';
import { connect } from 'react-redux'

import {getLastSales} from '../../controllers/DataTransformation';

class ChangeCounter extends Component {
    render(){
        return (
            <div className="col-12 col-sm-4 mt-auto">
                <div className="row">
                    <div className={`col ${this.props.change > 0 ? 'blue-text' : 'text-danger' }`} >
                        {this.props.change > 0 ? <i className="fa fa-angle-double-up"></i> : <i className="fa fa-angle-double-down"></i>}
                    </div>
                </div>
                <div className="row">                    
                    <div className={`big_adaptative_text col ${this.props.change < 0 ? 'text-danger' : 'blue-text'}`}>
                        {this.props.change ? this.props.change : 0}
                    </div>
                </div>
                <div className="row">                    
                    <div className={`col adaptative_text ${this.props.change < 0 ? 'text-danger' : 'text-light'}`}>
                        {`${this.props.change > 0 ? 'INCREASE' : this.props.change < 0 ? 'DECREASE' : 'PLAIN' }`}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    let last12Sales = getLastSales(state.SetDataReducer.data, 12, 0);
    let previous12Sales = getLastSales(state.SetDataReducer.data, 12, 12);
    
    let lastAmount = 0;
    last12Sales.forEach(sale => {
        if (sale) {
            lastAmount += parseFloat(sale.amount);
        }
    });

    let previousAmount = 0;
    previous12Sales.forEach(sale => {
        if (sale) {
            previousAmount += parseFloat(sale.amount);
        }
    });

    return ({
        change: lastAmount-previousAmount
    })
}


export default connect(mapStateToProps, null) (ChangeCounter);
