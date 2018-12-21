import React, {Component} from 'react';
import OptionSelector from './OptionSelector';

import ConfigurationGear from '../component/ConfigurationGear';
import LoadData from '../containers/LoadData';

/**
 * Componet used to draw the list of options and drowpdowns
 * located over the list of sales / clients
 */
class DataRowContainerTopBar extends Component {

    render(){
		let options_OPTIONS = [];
		options_OPTIONS.push(
			{
				name: 'save',
				argument_action_creator: null
			},
			{
				name: 'email',
				argument_action_creator: null
			}
		);
		let options_IMPORTANCE = [];
		options_IMPORTANCE.push(
			{
				name: 'low',
				argument_action_creator: null
			},
			{
				name: 'high',
				argument_action_creator: null
			}
		);
		

        return (
            <div className="row">
				<div className="col-12 col-sm-6 text-left text-light">
					<div className="row">
						<div className="col-sm-4 col-12 font-weight-bold">
							ALERTS
						</div>
						<div className="col-sm-8 col-12">
							Latest alersts (0)
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-6 text-right">
					<div className="row">
						<div className="col">
							&nbsp;
						</div>
						<div className="col-1">
							<i className="fa fa-pie-chart text-light"></i>
						</div>
						<div className="col-1">
							<i className="fa fa-filter text-light"></i>
						</div>
						<LoadData colSize="1" classes="text-light" />
						<ConfigurationGear colSize="1" classes="text-light" />
						<OptionSelector colSize="5" 
							type="down" 
							options={['OPTIONS', ...options_OPTIONS]}/>
					</div>
				</div>
				<div className="col-12 col-sm-6 text-right">&nbsp;</div>
				<div className="col-12 col-sm-6 text-right mt-4">
					<div className="row">
						<div className="col-4 text-right">&nbsp;</div>
						<OptionSelector colSize="8" type="down" 
							options={['IMPORTANCE', ...options_IMPORTANCE]}/>
					</div>
				</div>
            </div>
        );
    }
}

export default DataRowContainerTopBar;