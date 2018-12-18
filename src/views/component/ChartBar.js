import React, {Component} from 'react';
import DoughnutChart from '../containers/DoughnutChart';
import LineChart from '../containers/LineChart';
import ChangeCounter from '../containers/ChangeCounter';

class ChartBar extends Component {
    render() {
        return (
            <div className="row">
                <DoughnutChart />
                <LineChart />
                <ChangeCounter />
            </div>
        );
    }
}

export default ChartBar;