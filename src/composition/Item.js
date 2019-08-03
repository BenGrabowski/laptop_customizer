import React, {Component} from 'react';

class Item extends Component {
    render() {
        const selectedClass = this.props.name === this.props.selected.name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        
        return (
            <li key={this.props.key} className="feature__item">
                <div className={featureClass}
                  
                  onClick={e => this.props.updateFeature(this.props.parent, this.props.name)}>
                    { this.props.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.cost) })
                </div>
              </li>
        );
    }
}

export default Item;