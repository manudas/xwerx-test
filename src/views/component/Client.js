import React, {Component} from 'react';

class Client extends Component {

	static mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
	/**
	 * Pass a date object into this function
	 */
	month_name = function(dt){
		return Client.mlist[dt.getMonth()];
	};

	getDateFromTimestamp(ts) {
		const date = new Date(ts);
		const mn = this.month_name(date);
		const day = date.getDate();
		return `${mn} ${day}`;
	}

	render(){
		const sales = this.props.data && this.props.data.sales ? this.props.data.sales.length : 0;
		return(
			<div className="row mb-3 text-white d-flex">
				<div className="col-1 d-flex justify-content-center flex-column">
					<a href="#" className="btn btn-sq-sm bg-white-transparent text-white align-self-center">
						<i className="fa fa-birthday-cake fa-2x"></i>
					</a>
				</div>
				<div className="col-2 pr-2 d-flex justify-content-center flex-column">
					{this.props.data.name}
				</div>
				<div className="col-3 pr-2 d-flex justify-content-center flex-column">
					{sales} Sales
				</div>
				<div className="col-3 pr-2 d-flex justify-content-center flex-column">
					{this.props.data.registration ? this.getDateFromTimestamp(this.props.data.registration) : ''}
				</div>
				<div className="col-3 d-flex justify-content-center flex-column">
					<div className="row d-flex justify-content-center flex-row">
						<span className="col-4 d-flex justify-content-center flex-column">{`${sales==0?'LOW':(sales < 3 ? 'MIDDLE': 'VERY')}`}</span>
						<div className="col-8 d-flex justify-content-center flex-column">
							<img className="h-50 align-self-center" src={`/img/signal-${sales==0?0:(sales < 3 ? 2: 3)}.png`} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Client;