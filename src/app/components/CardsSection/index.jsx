import React from "react";
import Card from "../Card";

const CardsSection = () => {
  return (
    <div className="mt-[7.78px] mb-[48px]">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardsSection;
