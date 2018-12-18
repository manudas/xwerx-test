import React, {Component} from 'react';

class CategorySelector extends Component {
    render () {
        return (
            <div className="col-6 dropright text-left">
                <button className="font-weight-bold btn bg-transparent dropdown-toggle text-info" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    SELECTOR
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a data-text="CLIENTS" className="dropdown-item" href="#" 
                        onClick={this.changeSelector.bind(this)}>
                            Clients
                    </a>
                    <a data-text="SALES" className="dropdown-item" href="#"onClick={this.changeSelector.bind(this)}>
                            Sales
                    </a>
                </div>
            </div>
        );
    }

    changeSelector(event) {
        let eventTarget = event.currentTarget;
        let buttonText = eventTarget.attributes['data-text'].value;
        // window.$("#dropdownMenuButton").html(buttonText);
        document.getElementById('dropdownMenuButton').innerHTML = buttonText;
        alert("More stuff pending to do here sending an action creator to some controller");
    }
}

export default CategorySelector;