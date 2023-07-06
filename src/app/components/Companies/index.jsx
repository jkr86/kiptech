import React from "react";

const Companies = () => {
  return (
    <div className="rounded-t-none rounded-b-xl bg-[#0B4141] flex flex-wrap flex-row pt-2 px-16 pb-10 box-border items-center justify-center gap-[48px]">
      <div className="relative w-24 h-7">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle@2x.png"
        />
      </div>
      <img
        className="relative w-[84px] h-[24.04px] object-cover"
        alt=""
        src="/today@2x.png"
      />

      <img className="relative w-[84px] h-3.5" alt="" src="/group.svg" />

      <img className="relative w-[84px] h-[10.5px]" alt="" src="/vector4.svg" />

      <img
        className="relative w-[84px] h-[12.56px] object-cover"
        alt=""
        src="/sunrise@2x.png"
      />

      <img
        className="relative w-[84px] h-[23.82px] object-cover"
        alt=""
        src="/perfectpets-white@2x.png"
      />

      <img
        className="relative w-[84px] h-[50.22px] object-cover"
        alt=""
        src="/aus-dog-lover@2x.png"
      />
    </div>
  );
};

export default Companies;
