import React, {Component} from 'react';

class ChangeCounter extends Component {
    render(){
        return (
            <div className="col-12 col-sm-4">
                <div className="row">
                    <div className="col">
                        {this.props.change > 0 ? <i className="fa fa-angle-double-up"></i> : <i className="fa fa-angle-double-down"></i>}
                    </div>
                </div>
                <div className="row">                    
                    <div className={`col ${this.props.change > 0 ? 'text-danger' : ''}`}>
                        {this.props.change ? this.props.change : 0}
                    </div>
                </div>
                <div className="row">                    
                    <div className={`col ${this.props.change > 0 ? 'text-danger' : ''}`}>
                        {`${this.props.change > 0 ? 'INCREASE' : this.props.change < 0 ? 'DECREASE' : 'PLAIN' }`}
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangeCounter;