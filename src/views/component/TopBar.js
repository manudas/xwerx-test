import React, {Component} from 'react';
import CategorySelector from '../containers/CategorySelector';
import ConfigurationGear from './ConfigurationGear';

class TopBar extends Component {

    render() {
        return (
            <div className="row" >
                <CategorySelector />
                <ConfigurationGear colSize="6" classes="text-muted" />
            </div>
        );
    }
}

export default TopBar;