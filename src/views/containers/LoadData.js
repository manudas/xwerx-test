import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { requestData } from '../action_creators/requestData'

// import DataType from '../../utils/DataType'

class LoadData extends Component {

    constructor(props) {
        super(props);
        /*
        this.state = {
            isLoading:false,
            dataType: 0 // nothing. definition in utils/DataType.js
        };
        */
    }

    render() {
        if (this.props.isLoading && (this.props.dataType == 0)) {
            alert("Please select a data type to be represented in SELECTOR drowpdown");
        }
        return (
            <div 
                onClick={this.props.makeRequest}
                className={`col-${this.props.colSize} text-right`}>
                <i className={`fa fa-flip-vertical ${this.props.classes ? this.props.classes : ''}`} >
                    <i className={`fa ${this.props.isLoading?'fa-spin':''}`}>
                        <i className="fa fa-undo fa-flip-vertical"></i>
                    </i>
                </i>
            </div>
        );
    }
}

const mapStateToProps = function(state) { 
    return {
        isLoading : state.LoadDataReducer.isLoading,
        dataType: state.SetDataTypeReducer.dataType
    }
}
// ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        makeRequest: requestData
    },
    dispatch
);
// △ △ △ △ △ △ △ △ △ △
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadData)