import React from "react";
import PriceElement from "../components/PriceElement";
import PriceHeader from "../components/PriceHeader";

const Fees = () => {
  return (
    <div>
      <div className="mx-36 mt-12 grid grid-cols-1 " style={{ border: "2px solid black ", borderRadius:"25px"}}>
        <PriceHeader/>
        <PriceElement/>
        <PriceElement/>
        <PriceHeader/>
        <PriceElement/>
        <PriceElement/>
      </div>
    </div>
  );
};

export default Fees;
