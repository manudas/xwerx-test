import React, {Component} from 'react';

import { connect } from 'react-redux'

import {jsUcfirst} from '../../utils/strings';

class OptionSelector extends Component {
    render () {
        let accumulated_options = [];
        if (this.props.options && this.props.options.length > 1){
            for (let i = 1; i < this.props.options.length; i++) {
                accumulated_options.push(
                    <a data-text={jsUcfirst(this.props.options[i].name)} className="dropdown-item" href="#" 
                        onClick={this.changeSelector.bind(this, 
                                    this.props.options[i].argument_action_creator ? this.props.options[i].argument_action_creator : null)}>
                            {jsUcfirst(this.props.options[i].name)}
                    </a>
                );
            }
        }
        return (
            (this.props.options && this.props.options.length > 1) ?
                <div className={`col-${this.props.colSize} drop${this.props.type} ${this.props.classes? this.props.classes:''}`}>
                    <button ref={'optionsButton'} className=" border-2 border-light font-weight-bold btn bg-transparent dropdown-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.props.options[0].toUpperCase()}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {accumulated_options}
                    </div>
                </div>
            : ''    
        );
    }

    changeSelector(argument_action_creator, event) {
        let eventTarget = event.currentTarget;
		let buttonText = eventTarget.attributes['data-text'].value;
		if (this.props.actionCreator) {
			this.props.dispatch(this.props.actionCreator(argument_action_creator));
		} else {
			alert("This option is not yet available");
		}
		let optionsButton = this.refs.optionsButton;
        // window.$("#dropdownMenuButton").html(buttonText);
        optionsButton.innerHTML = buttonText;
    }
}


export default connect(
    null, // map state to props
    null, // map dispatch to props
  )(OptionSelector)