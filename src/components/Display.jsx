// Burger.js
import React, { useState } from "react";
import BurgerView from "./BurgerView";

function Display({ price, baconDivs, meatDivs, cheeseDivs, saladDivs }) {
  // const [saladDivs, setSaladDivs] = useState([]);
  // const [cheeseDivs, setCheeseDivs] = useState([]);
  // const [baconDivs, setBaconDivs] = useState([]);
  // const [meatDivs, setMeatDivs] = useState([]);
  return (
    <div className="burgerOverflow">
      {price === 4.0 ? (
        <div className="burger">
          <div className="topBurger"></div>
          <div className="start">
            <strong>Please start adding Ingredients</strong>
          </div>
          <div className="botBurger">{console.log(price)}</div>
        </div>
      ) : (
        <div className="itemsDiv">
          <div className="topBurger"></div>
          {/* {ingredients} */}
          {baconDivs}
          {cheeseDivs}
          {meatDivs}
          {saladDivs}
          <div className="botBurger">{console.log(price)}</div>
        </div>
      )}
      {/* <BurgerView
        saladDivs={saladDivs}
        baconDivs={baconDivs}
        cheeseDivs={cheeseDivs}
        meatDivs={meatDivs}
        setBaconDivs={setBaconDivs}
        setCheeseDivs={setCheeseDivs}
        setMeatDivs={setMeatDivs}
        setSaladDivs={setSaladDivs}
      /> */}
    </div>
  );
}

export default Display;
