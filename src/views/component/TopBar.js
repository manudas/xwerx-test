import React, {Component} from 'react';
import OptionSelector from '../containers/OptionSelector';
import ConfigurationGear from './ConfigurationGear';

import setDataType from '../action_creators/setDataType';
import DataType from '../../utils/DataType';

/**
 * Component used to render the top with the OPTIONS
 * selector and the ConfigurationGear
 */
class TopBar extends Component {

    render() {
        let options = [];
        for (let key in DataType) {
            // skip loop if the property is from prototype
            if (!DataType.hasOwnProperty(key)) continue;
            // key => clients / sales
            let value = DataType[key];
            options.push(
                {
                    name: key,
                    argument_action_creator: value
                }
            );
        }

        return (
            <div className="row" >
                <OptionSelector colSize="6"
                                type="right" 
                                options={['SELECTOR', ...options]}
                                actionCreator = {setDataType}
                                classes="text-left" />
                
                <ConfigurationGear colSize="6" classes="text-muted" />
            </div>
        );
    }
}

export default TopBar;