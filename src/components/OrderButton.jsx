import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderConfirm } from "../features/order/orderSlice";
import "./OrderButton.css";

function OrderButton(props) {
  const dispatch = useDispatch();
  const { baconCount, saladCount, meatCount, cheeseCount, price, resetBurger } =
    props.btnprop;
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const handleclick = () => {
    setShowModal(true);
  };
  const handleContinue = () => {
    console.log("hello  ");
    setShowModal(false);
    setShowModal2(true);
  };
  const orderConfirmed = () => {
    dispatch(
      orderConfirm({ baconCount, saladCount, meatCount, cheeseCount, price })
    );

    setShowModal2(false);
    resetBurger();
  };

  return (
    <>
      <div>
        <button
          onClick={() => handleclick()}
          disabled={!isAuthenticated}
          style={{
            color: !isAuthenticated ? "#888888" : "#000000",
            backgroundColor: !isAuthenticated ? "#c7c6c6" : "#dad735",
            padding: 20,
            cursor: !isAuthenticated ? "not-allowed" : "pointer",
          }}
          type="button"
        >
          {isAuthenticated ? "ORDER NOW" : "SIGN UP TO ORDER"}
        </button>
        {showModal && (
          <div className="modal">
            <div className="modalContainer">
              <h3>Your Order</h3>
              <p>A delicious burger with the following ingredients:</p>
              <div>
                <li>Bacon: {baconCount}</li>
                <li>Meat: {meatCount}</li>
                <li>Salad: {saladCount}</li>
                <li>Cheese: {cheeseCount}</li>
              </div>
              <h4>Total Price: {price.toFixed(2)}</h4>
              <p>Continue to Checkout?</p>
              <button className="btns" onClick={() => setShowModal(false)}>
                <strong style={{ color: " #944317", fontSize: 17 }}>
                  Cancel
                </strong>
              </button>
              <button onClick={handleContinue} className="btns">
                <strong style={{ color: "#5c9210", fontSize: 17 }}>
                  Continue
                </strong>
              </button>
            </div>
          </div>
        )}
        {showModal2 && (
          <div className="modal2">
            <div className="modalContainer2">
              <h4>Enter your contact data</h4>
              <div className="inputFields">
                <input type="text" placeholder="Your Name"></input>
                <input type="text" placeholder="Address"></input>
                <input type="text" placeholder="Country"></input>
              </div>
              <h4>Total Price: {price.toFixed(2)}</h4>
              <button className="btns2" onClick={orderConfirmed}>
                <strong style={{ color: "#5c9210", fontSize: 17 }}>
                  Order
                </strong>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OrderButton;
