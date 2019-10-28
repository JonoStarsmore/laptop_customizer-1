import React from 'react';
import slugify from 'slugify';
import FeatureItem from './featureItem';

const featureList = props => {
  console.log(props)
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureItem  
        feature={feature} 
        itemHash={itemHash}
        item={item}
        selected={props.selected[feature].name}
        updateFeature={props.updateFeature}
        />
      );
    });
    return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
  })

  return(
    <>
    {features}
    </>
  )  
}


export default featureList;