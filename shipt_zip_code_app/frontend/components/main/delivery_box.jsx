import React from 'react';

const DeliveryBox = ({stores})=>{
  if (stores.length === 0) {
    return null;
  }else {
    let StoreItems = stores.map(store=>{
      let available = store.openYet ?
        <div className="db-avail">Now Available</div> :
        <div className="db-avail">{`Coming ${store.month+1}/${store.day+1}`}</div>;
      return(
        <div key={store.id}>
          <div className="db-store-name">{`${store.name}`}</div>
          {available}
        </div>
      );
    });
    return(
      <div id="deliverybox">
        <div>
          <div id="db-header">Delivering from:</div>
          <div className="store-items">
            {StoreItems}
          </div>
        </div>
      </div>
    );
  }
};

export default DeliveryBox;
