import React from 'react'
import SummaryItem from './summaryItem'

const SummaryList = props => {
    const list = Object.keys(props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = props.selected[feature];

      return (
        <SummaryItem 
          featureHash={featureHash}
          feature= {feature}
          selectedOption={selectedOption}
        />
      );
    });
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

    const total = Object.keys(props.selected).reduce(
      (acc, curr) => acc + props.selected[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {list}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
        
      </section>
    )
}

export default SummaryList