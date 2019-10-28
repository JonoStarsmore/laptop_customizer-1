import React, { Component } from 'react';
import FeatureList  from './featureList';

class form extends Component {

render(){
    return(
<form className="main__form">
 <h2>Customize your laptop</h2>
    <FeatureList 
    features={this.props.features}
    selected={this.props.selected}
    updateFeature={this.props.updateFeature}
/>     
</form>
)}
}

export default form;