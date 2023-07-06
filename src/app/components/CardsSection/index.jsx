import React from "react";
import Card from "@/app/components/Card";

const CardsSection = ({ data }) => {
  return (
    <div className="mt-[7.78px] mb-[48px]">
      {data.length > 0 ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px]">
          {data.map((item, idx) => {
            return <Card key={idx} data={item} />;
          })}
        </div>
      ) : (
        <p className="mt-12 text-center">Empty results</p>
      )}
    </div>
  );
};

export default CardsSection;
