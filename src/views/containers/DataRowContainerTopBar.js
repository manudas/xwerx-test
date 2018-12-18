import React, {Component} from 'react';
import OptionSelector from './OptionSelector';

import ConfigurationGear from '../component/ConfigurationGear';
import LoadData from '../component/LoadData';

class DataRowContainerTopBar extends Component {

    render(){
        return (
            <div className="row">
				<div className="col-12 col-sm-6 text-left text-light">
					<div className="row">
						<div className="col-2 font-weight-bold">
							ALERTS
						</div>
						<div className="col-10">
							Latest alersts (0)
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-6 text-right">
					<div className="row">
						<div className="col">
							<i class="fa fa-pie-chart text-light"></i>
						</div>
						<div className="col-1">
							<i class="fa fa-filter text-light"></i>
						</div>
						<LoadData colSize="1" classes="text-light" />
						<ConfigurationGear colSize="1" classes="text-light" />
						<OptionSelector colSize="3"
							type="down" 
							options={['OPTIONS', 'SAVE', 'EMAIL']}/>
					</div>
				</div>
				<div className="col-12 col-sm-6 text-right">&nbsp;</div>
				<div className="col-12 col-sm-6 text-right mt-4">
					<div className="row">
						<div className="col text-right">&nbsp;</div>
						<OptionSelector colSize="4" type="down" 
							options={['IMPORTANCE', 'LOW', 'HIGH']}/>
					</div>
				</div>
            </div>
        );
    }
}

export default DataRowContainerTopBar;