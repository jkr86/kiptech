import React from "react";

const NaavBar = () => {
  return (
    <nav className="self-stretch bg-[#0B4141] flex flex-col items-center justify-start gap-[12px]">
      <div className="self-stretch bg-emerald flex flex-row py-[17px] px-16 items-center justify-between text-center text-mini text-orange-red">
        <img
          className="relative w-[116px] h-[32.5px]"
          alt=""
          src="/logo6.svg"
        />
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="flex flex-row items-start justify-start">
              <div className="rounded-xl shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start">
                <div className="rounded-md bg-yellow-500 overflow-hidden flex flex-row py-[22px] px-5 items-center justify-center gap-[10px]">
                  <div className="relative tracking-[0.01em] font-semibold text-white">
                    Button-lg
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="flex flex-row items-start justify-start relative text-xl text-gray-800">
              <div className="rounded-xl bg-gray shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[38px] h-[38px] overflow-hidden shrink-0 flex flex-row items-center justify-center z-[0] border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/list1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NaavBar;
