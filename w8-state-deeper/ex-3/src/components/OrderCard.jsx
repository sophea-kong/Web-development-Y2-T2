import React from "react";

export default function OrderCard({ orders,increase,decrease}) {
  return (
    <div className="order">
      <div>
        <h4>{orders.product}</h4>
        <small>{orders.price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={decrease}>-</div>
        <h4>{orders.quantity}</h4>
        <div className="order-button" onClick={increase}>+</div>
      </div>
    </div>
  );
}
