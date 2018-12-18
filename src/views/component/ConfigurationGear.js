import React, {Component} from 'react';

class ConfigurationGear extends Component {

    constructor(props) {
        super(props);
        this.state ={
            isCogFocused: false
        }
    }

    render() {
        let onTouchStartFunction = this.spinCog.bind(this);
        let onTouchEndFunciton = this.stopCog.bind(this);
        return (
            <div className={`col-${this.props.colSize} text-right`}>
                <i 
                    className={`${this.props.classes ? this.props.classes : ''} fa fa-cog ${this.state.isCogFocused?'fa-spin':''}`} 
                    onTouchStart={onTouchStartFunction}
                    onMouseOver={onTouchStartFunction}
                    onTouchEnd={onTouchEndFunciton}
                    onMouseOut={onTouchEndFunciton}
                    ></i>
            </div>
        );
    }

    spinCog(event) {
        this.setState({isCogFocused : true});
    }

    stopCog(event) {
        this.setState({isCogFocused : false});
    }
}

export default ConfigurationGear;