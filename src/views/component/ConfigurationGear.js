import React, {Component} from 'react';

/**
 * Component to draw the "spinning" configuration gear
 */
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

    /**
     * Starts the spinning
     * @param {*} event 
     */
    spinCog(event) {
        this.setState({isCogFocused : true});
    }

    /**
     * Stops the spinning
     * @param {*} event 
     */
    stopCog(event) {
        this.setState({isCogFocused : false});
    }
}

export default ConfigurationGear;