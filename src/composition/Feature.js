import React, { Component } from 'react';
import Item from './Item';

class Feature extends Component {
    
    render() {
      const options = this.props.featureOptions.map((opt, index) => {
          return <Item
                    name={opt.name}
                    cost={opt.cost}
                    key={index}
                    selected={this.props.selected}
                    parent={this.props.featureName}
                    updateFeature={this.props.updateFeature}
                />
      });
      
        return (
            <div className="feature">
              <div className="feature__name">{this.props.featureName}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
      )
    }
}

export default Feature;