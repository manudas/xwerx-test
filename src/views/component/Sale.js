import React, {Component} from 'react';

import {getDateFromTimestamp} from '../../utils/DateTime';

class Sale extends Component {
	render(){
		return(
			<div className="row mb-3 text-white d-flex">
				<div className="col-1 d-flex justify-content-center flex-column">
					<a href="#" className="btn btn-sq-sm bg-white-transparent text-white align-self-center">
						<i className="fa fa-birthday-cake fa-2x"></i>
					</a>
				</div>
				<div className="col-3 pr-2 d-flex justify-content-center flex-column">
					ID: {this.props.data.id}
				</div>
				<div className="col-2 pr-2 d-flex justify-content-center flex-column">
					Amount: {this.props.data.amount}
				</div>
				<div className="col-3 pr-2 d-flex justify-content-center flex-column">
					{getDateFromTimestamp(this.props.data.date)}
				</div>
				<div className="col-3 pr-2 d-flex justify-content-center flex-column">
					{this.props.data.client}
				</div>
			</div>
		);
	}
}

export default Sale;