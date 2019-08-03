import React, { Component } from 'react';
import Feature from './Feature';

class TechSpecs extends Component {
    render() {
       const featureList = Object.keys(this.props.features)
       .map((feature, index) => {
            return (
                <Feature 
                    featureOptions={this.props.features[feature]}
                    featureName={feature}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                    // key={index}
                />
            )
      });      
        
        return (
            <div className="Feature-List">
                <section className="main__form">
                    <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                    {featureList}
                </section>
            </div>
        );
    }
       
}

export default TechSpecs;
