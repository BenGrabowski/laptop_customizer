import React, {Component} from 'react';

class Item extends Component {
    render() {
        const selectedClass = this.props.name === this.props.selected[this.props.parent].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        
        return (
            <li className="feature__item">
                <div className={featureClass}
                    onClick={e => this.props.updateFeature(this.props.parent, this.props)}>
                    { this.props.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.cost) })
                </div>
            </li>
        );
    }
}

export default Item;