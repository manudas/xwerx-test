import React, {Component} from 'react';

class Client extends Component {
	render(){
		const sales = this.props.data && this.props.data.sales ? this.props.data.sales.length : 0;
		return(
			<div className="row mb-3 text-white d-flex">
				<div className="col-1">
					<a href="#" className="btn btn-sq-sm bg-white-transparent text-white">
						<i className="fa fa-birthday-cake fa-2x"></i>
					</a>
				</div>
				<div className="col-3 pr-2 d-flex justify-content-center flex-column">
					{this.props.data.name}
				</div>
				<div className="col-4 pr-2 d-flex justify-content-center flex-column">
					{sales} Sales
				</div>
				<div className="col-4">
					<i class={`fa fa-signal-alt-${sales == 0 ? 0 : (sales < 2 ? 1 : sales < 3 ? 2 : 3)}`}></i>
				</div>
			</div>
		);
	}
}

export default Client;