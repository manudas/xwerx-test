import React, {Component} from 'react';
import DoughnutChart from '../containers/DoughnutChart';
import BarChart from '../containers/BarChart';
import ChangeCounter from '../containers/ChangeCounter';

class ChartBar extends Component {
    render() {
        return (
            <div className="row pb-3  align-self-baseline d-flex ">
                <DoughnutChart />
                <BarChart />
                <ChangeCounter />
            </div>
        );
    }
}

export default ChartBar;