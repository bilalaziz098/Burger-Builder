import React from "react";
import "./Orders.css";
import { useDispatch, useSelector } from "react-redux";
import { updateArr } from "../features/order/orderSlice";

function Orders() {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.order.orders);
  const orderDetails1 = useSelector((state) => state.order.orderArr);

  const handleDel = (index) => {
    const updatedArr = [...orderDetails1];
    updatedArr.splice(index, 1);
    dispatch(updateArr(updatedArr));
  };

  if (!orderDetails) {
    return <div>No orders placed yet!</div>;
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Your Order Details</h3>
      {orderDetails1.map((order, index) => (
        <div key={index} className="orderDetails">
          <p>Order No. {index + 1}</p>
          <div className="inDiv">
            <ul className="inUL">
              <span>Ingredients: </span>
              <li>Bacon: ({order.baconCount})</li>
              <li>Meat: ({order.meatCount})</li>
              <li>Salad: ({order.saladCount})</li>
              <li>Cheese: ({order.cheeseCount})</li>
            </ul>
            <p onClick={() => handleDel(index)}>Delete</p>
          </div>
          <h4 style={{ marginLeft: 40 }}>
            Total Price: {order.price ? order.price : "N/A"}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default Orders;
