import React, { Component } from 'react';
import Feature from './Feature';

class TechSpecs extends Component {
    render() {
       const techList = Object.keys(this.props.features)
       .map((feature, index) => {
           return (  
               <Feature options={this.props.features[feature]}/>
           )
       })
        
        return (
            <div className="Feature-List">
                <section className="main__form">
                    <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                    {techList}
                </section>
            </div>
        );
    }
       
}


export default TechSpecs;
