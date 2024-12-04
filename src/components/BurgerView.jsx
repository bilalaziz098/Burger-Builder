import React, { useEffect, useState } from "react";
// import Items from "./Items";
import "./BurgerView.css";
import Ingredients from "./Ingredients";
import Display from "./Display";
import OrderButton from "./OrderButton";

// function BurgerView({
//   setSaladDivs,
//   setBaconDivs,
//   setCheeseDivs,
//   setMeatDivs,
//   saladDivs,
//   meatDivs,
//   cheeseDivs,
//   baconDivs,
// }) {
function BurgerView() {
  const [price, setPrice] = useState(4.0);
  const [saladCount, setSaladCount] = useState(0);
  const [baconCount, setBaconCount] = useState(0);
  const [cheeseCount, setCheeseCount] = useState(0);
  const [meatCount, setMeatCount] = useState(0);
  const [saladdisable, setSaladDisable] = useState(false);
  const [cheesedisable, setCheeseDisable] = useState(false);

  const [bacondisable, setBaconDisable] = useState(false);
  const [meatdisable, setMeatDisable] = useState(false);
  const [saladDivs, setSaladDivs] = useState([]);
  const [cheeseDivs, setCheeseDivs] = useState([]);
  const [baconDivs, setBaconDivs] = useState([]);
  const [meatDivs, setMeatDivs] = useState([]);

  const resetBurger = () => {
    setSaladCount(0);
    setBaconCount(0);
    setCheeseCount(0);
    setMeatCount(0);
    setSaladDivs([]);
    setBaconDivs([]);
    setCheeseDivs([]);
    setMeatDivs([]);
    setPrice(4.0);
    setSaladDisable(true);
    setBaconDisable(true);
    setCheeseDisable(true);
    setMeatDisable(true);
  };
  const orderbtn = {
    saladCount,
    baconCount,
    cheeseCount,
    meatCount,
    price,
    resetBurger,
  };

  useEffect(() => {
    console.log("in useeff saladCount is  ", saladCount);
    if (saladCount == 0) {
      setSaladDisable(true);
    } else {
      setSaladDisable(false);
    }
  }, [saladCount]);
  useEffect(() => {
    console.log("in useeff baconCount is  ", baconCount);
    if (baconCount == 0) {
      setBaconDisable(true);
    } else {
      setBaconDisable(false);
    }
  }, [baconCount]);
  useEffect(() => {
    console.log("in useeff cheeseCount is  ", cheeseCount);
    if (cheeseCount == 0) {
      setCheeseDisable(true);
    } else {
      setCheeseDisable(false);
    }
  }, [cheeseCount]);
  useEffect(() => {
    console.log("in useeff meatCount is  ", meatCount);
    if (meatCount == 0) {
      setMeatDisable(true);
    } else {
      setMeatDisable(false);
    }
  }, [meatCount]);

  const handleMoreSalad = () => {
    setPrice(price + 0.5);
    setSaladCount(saladCount + 1);
    console.log("saladCount is ", saladCount);
    setSaladDivs([...saladDivs, <div className="salad" key={saladDivs}></div>]);
    setSaladDisable(false);
  };
  const handleLessSalad = () => {
    console.log("less");
    setSaladCount(saladCount - 1);
    if (saladCount > 0) {
      console.log(saladDivs);
      setSaladDivs((prev) => prev.slice(1));
      setPrice(price - 0.5);
    }
  };
  const handleMoreBacon = () => {
    setPrice(price + 0.7);
    setBaconCount(baconCount + 1);
    console.log("baconCount is ", baconCount);
    setBaconDivs([...baconDivs, <div key={baconDivs} className="bacon"></div>]);
    setBaconDisable(false);
  };
  const handleLessBacon = () => {
    console.log("less");
    setBaconCount(baconCount - 1);
    if (baconCount > 0) {
      setBaconDivs((prev) => prev.slice(1));
      setPrice(price - 0.7);
    }
  };
  const handleMoreCheese = () => {
    setPrice(price + 0.4);
    setCheeseCount(cheeseCount + 1);
    console.log("cheeseCount is ", cheeseCount);
    setCheeseDivs([
      ...cheeseDivs,
      <div key={cheeseDivs} className="cheese"></div>,
    ]);
    setCheeseDisable(false);
  };
  const handleLessCheese = () => {
    console.log("less");
    setCheeseCount(cheeseCount - 1);
    if (cheeseCount > 0) {
      setCheeseDivs((prev) => prev.slice(1));
      setPrice(price - 0.4);
    }
  };
  const handleMoreMeat = () => {
    setPrice(price + 1.3);
    setMeatCount(meatCount + 1);
    console.log("meatCount is ", meatCount);
    setMeatDivs([...meatDivs, <div key={meatDivs} className="meat"></div>]);
    setMeatDisable(false);
  };
  const handleLessMeat = () => {
    console.log("less");
    setMeatCount(meatCount - 1);
    if (meatCount > 0) {
      setMeatDivs((prev) => prev.slice(1));
      setPrice(price - 1.3);
    }
  };

  return (
    <div>
      <Display
        price={price}
        baconDivs={baconDivs}
        saladDivs={saladDivs}
        meatDivs={meatDivs}
        cheeseDivs={cheeseDivs}
      />
      <div className="orderDiv">
        <p>Current price: {price.toFixed(2)}</p>
        <div className="btnDiv">
          <Ingredients
            name="Salad"
            increase={handleMoreSalad}
            decrease={handleLessSalad}
            disable={saladdisable}
          />
          <Ingredients
            name="Bacon"
            increase={handleMoreBacon}
            decrease={handleLessBacon}
            disable={bacondisable}
          />
          <Ingredients
            name="Cheese"
            increase={handleMoreCheese}
            decrease={handleLessCheese}
            disable={cheesedisable}
          />
          <Ingredients
            name="Meat"
            increase={handleMoreMeat}
            decrease={handleLessMeat}
            disable={meatdisable}
          />
        </div>
        <OrderButton btnprop={orderbtn} />
      </div>
    </div>
  );
}

export default BurgerView;
