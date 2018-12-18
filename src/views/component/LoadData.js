import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {requestData} from '../action_creators/requestData'

class LoadData extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading:false};
    }

    render() {
        return (
            <div 
                onClick={this.props.makeRequest}
                className={`col-${this.props.colSize} text-right`}>
                <i className={`fa fa-flip-vertical ${this.props.classes ? this.props.classes : ''}`} >
                    <i className={`fa ${this.props.isLoading?'fa-spin':''}`}>
                        <i class="fa fa-undo fa-flip-vertical"></i>
                    </i>
                </i>
            </div>
        );
    }
}

const mapStateToProps = function(state) { 
    return {isLoading : state.LoadDataReducer.isLoading}
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