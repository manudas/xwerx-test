import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import $ from 'jquery';
import bootstrap from 'bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import ChartContainer from './views/component/ChartContainer';
import DataRowContainer from './views/containers/DataRowContainer';

import * as reducers from './reducers';

const rootReducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// const store = createStore(todoApp);
const store = createStoreWithMiddleware(rootReducer);

class App extends Component {

	constructor(props){
		super(props);
		window.$ = $;
	}

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<ChartContainer />
					<DataRowContainer />
				</div>
			</Provider>
		);
	}
}

export default App;