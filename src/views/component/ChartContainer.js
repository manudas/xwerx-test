import React, {Component} from 'react';
import TopBar from './TopBar';
import ChartBar from './ChartBar';

class ChartContainer extends Component {
    render() {
        return (
            <div className="container rounded mt-3 pt-3 bg-gray">
                <TopBar />
                <ChartBar />
            </div>
        );
    }
}

export default ChartContainer;