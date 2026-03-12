import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];




export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  function updateAmout(index,value){
  setOrders((prv) => prv.map((order, i) => 
        i == index ? {...order, quantity: (order.quantity + value < 0) ? 0 : order.quantity + value} : (order)
      )
  )
  }

  function caltotal(){
    let total = 0;
    orders.map((item)=>total+=(item.price * item.quantity))
    return total;
  }

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
      {orders.map((order,index) => (
      <OrderCard orders={order} increase={()=>(updateAmout(index,+1))} decrease={()=>(updateAmout(index,-1))}></OrderCard>
      ))}
      </div>

      <CheckoutButton total={caltotal()}></CheckoutButton>
    </>
  );
}
