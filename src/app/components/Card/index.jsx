import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  const { name, location, rating, price, cta, services, popular } = data;
  return (
    <div className="flex-1 rounded-t-none rounded-b-xl shadow-[0px_4px_3px_rgba(0,_0,_0,_0.07),_0px_2px_2px_rgba(0,_0,_0,_0.06)] overflow-hidden flex flex-col items-center justify-center relative">
      <div className="self-stretch rounded-t-xl rounded-b-none bg-orange-red flex flex-col items-start justify-start relative gap-[4px] z-[0]">
        <img
          className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[308px] shrink-0 object-cover z-[0]"
          alt=""
          src="/rectangle-71@2x.png"
        />

        <div className=" absolute top-[4px] left-[4px] rounded-full bg-[#0B4141] flex flex-row p-1 items-start justify-start z-[1]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/info.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-t-none rounded-b-xl flex flex-col p-2 items-start justify-start gap-[8px] z-[1]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
          <p className="flex-1 relative text-[16px] font-bold leading-[24px] text-[#122B2B]">
            {location?.label}
          </p>
          <p className="relative leading-[24px] text-[16px] font-bold text-[#122B2B]">
            {rating} stars
          </p>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-xl">
          <div className="flex flex-col items-start justify-start">
            <div className="relative text-[20px] leading-[24px] text-[#122B2B]  border-b-[1.5px] border-[#122B2B]">
              {name}
            </div>
            <div className="relative text-[16px] leading-[24px] text-[#122B2B]">
              From ${`${price}`}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end gap-[4px] text-xs">
          <a
            href={cta}
            className="rounded-xl bg-[#FF5C39] flex flex-row py-2 px-4 items-center justify-end text-center text-base text-bone-75"
          >
            <p className="relative leading-[24px] uppercase text-white">
              Book now
            </p>
          </a>
        </div>
      </div>
      {popular ? (
        <button className=" absolute top-[7px] left-[47px] rounded-lg bg-white flex flex-row py-[4px] px-3 items-center justify-end gap-[8px] z-[2] text-sm border-[1px] border-solid border-dark-green-25">
          <div className="relative leading-[18px]">Popular</div>
        </button>
      ) : null}
      <div className=" absolute top-[4px] right-[3.67px] flex flex-col items-start justify-start gap-[4px] z-[3]">
        {(services ?? []).map((service, idx) => {
          return (
            <Image
              key={idx}
              width={64}
              height={64}
              className="relative overflow-hidden shrink-0"
              alt=""
              src={service.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Card;
