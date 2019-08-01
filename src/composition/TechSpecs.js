import React, { Component } from 'react';
import Feature from './Feature';

class TechSpecs extends Component {
    render() {
     const techList = this.props.features.map(item => {
         return (
             <Feature 
                name={item.key}
                items={item.props}/>
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
