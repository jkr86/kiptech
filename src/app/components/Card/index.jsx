import React from "react";

const Card = () => {
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
        <div className=" absolute bottom-[11px] left-[calc(50%_-_25.33px)] flex flex-row items-center justify-start gap-[10px] z-[2]">
          <div className="relative w-2.5 h-2.5">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-980xl bg-bone"></div>
          </div>
          <div className="relative w-2.5 h-2.5">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-980xl bg-bone-75 opacity-[0.6]"></div>
          </div>
          <div className="relative w-2.5 h-2.5 opacity-[0.6]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-980xl bg-bone"></div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-t-none rounded-b-xl flex flex-col p-2 items-start justify-start gap-[8px] z-[1]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
          <p className="flex-1 relative text-[16px] font-bold leading-[24px] text-[#122B2B]">
            SA
          </p>
          <p className="relative leading-[24px] text-[16px] font-bold text-[#122B2B]">
            4.8stars
          </p>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-xl">
          <div className="flex flex-col items-start justify-start">
            <div className="relative text-[20px] leading-[24px] text-[#122B2B]  border-b-[1.5px] border-[#122B2B]">
              Kip Adelaide North
            </div>
            <div className="relative text-[16px] leading-[24px] text-[#122B2B]">
              From $58
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end gap-[4px] text-xs">
          <button className="rounded-xl bg-[#FF5C39] flex flex-row py-2 px-4 items-center justify-end text-center text-base text-bone-75">
            <p className="relative leading-[24px] uppercase text-white">
              Book now
            </p>
          </button>
        </div>
      </div>
      <button className=" absolute top-[7px] left-[47px] rounded-lg bg-white flex flex-row py-[4px] px-3 items-center justify-end gap-[8px] z-[2] text-sm border-[1px] border-solid border-dark-green-25">
        <div className="relative leading-[18px]">Popular</div>
      </button>
      <div className=" absolute top-[4px] right-[3.67px] flex flex-col items-start justify-start gap-[4px] z-[3]">
        <img
          className="relative w-16 h-16 overflow-hidden shrink-0"
          alt=""
          src="/dog-boarding.svg"
        />

        <img
          className="relative w-16 h-16 overflow-hidden shrink-0"
          alt=""
          src="/cat-boarding1.svg"
        />

        <img
          className="relative w-16 h-16 overflow-hidden shrink-0"
          alt=""
          src="/dog-cat.svg"
        />
      </div>
    </div>
  );
};

export default Card;
