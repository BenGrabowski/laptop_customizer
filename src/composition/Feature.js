import React, { Component } from 'react';
import Item from './Item';

class Feature extends Component {
    
    render() {
        const items = this.props.options.map(item => {
            return (
                <Item name={item.name} />
            )
        });
        
        return (
            {items}
        )
    }
}

export default Feature;