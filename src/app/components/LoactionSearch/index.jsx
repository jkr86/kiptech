import React from "react";

const LocationSearch = () => {
  return (
    <div className="mx-auto rounded-xl bg-[white] shadow-[0px_4px_3px_rgba(0,_0,_0,_0.07),_0px_2px_2px_rgba(0,_0,_0,_0.06)] max-w-[571px] h-[72px] flex flex-row items-start justify-between mt-[-32px]">
      <div className="flex flex-row items-start justify-start">
        <div className=" h-[72px] flex flex-col items-start justify-center">
          <div className="self-stretch flex-1 rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-orange-red flex flex-row py-2 px-0 items-center justify-start z-[0]">
            <div className="rounded-xl flex flex-col py-0 pr-[25px] pl-3 items-start justify-center">
              <p className="relative text-[14px] font-bold text-[#0B4141] leading-[24px] uppercase">
                Location
              </p>
              <p className="relative text-[12px] font-bold leading-[16px] text-[#487171]">
                Find the nearest kip
              </p>
            </div>
          </div>
        </div>
        <div className=" h-[72px] flex flex-row py-2 px-0 box-border items-center justify-start text-left">
          <div className="flex-1 rounded-xl flex flex-col py-0 pr-10 pl-3 items-start justify-center">
            <p className="relative text-[14px] font-bold text-[#0B4141] leading-[24px] uppercase">
              Service
            </p>
            <p className="relative text-[12px] font-bold leading-[16px] text-[#487171]">
              How can we help
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-orange-red flex flex-row p-3 items-center justify-end relative text-bone">
        <button className="rounded-xl bg-[#FF5C39] h-8 flex flex-row py-1 px-3 box-border items-center justify-center gap-[8px] z-[2]">
          <img className="relative w-[14px] h-[14px]" alt="" src="/icon.svg" />
          <b className="relative ext-[14px] font-bold leading-[24px] uppercase text-white">
            search
          </b>
        </button>
      </div>
    </div>
  );
};

export default LocationSearch;
