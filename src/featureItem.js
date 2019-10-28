import React from 'react';
import slugify from 'slugify';

const featureItem = props => {

  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
      return (
        <div key={props.itemHash} className="feature__item">
          <input
            type="radio"
            id={props.itemHash}
            className="feature__option"
            name={slugify(props.feature)}
            checked={props.item.name === props.selected}
            onChange={e => props.updateFeature(props.feature, props.item)}
          />
          <label htmlFor={props.itemHash} className="feature__label">
            {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
          </label>
        </div>
      );
}


export default featureItem;