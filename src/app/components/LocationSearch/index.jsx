import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import data from "@/app/components/LocationSearch/mock-data.json";

const LocationSearch = ({
  activeLocation,
  setLocation,
  activeService,
  setService,
}) => {
  const [isLocationView, openLocationView] = useState(false);
  const [isServiceView, openServiceView] = useState(false);
  const { locations, services } = data;
  return (
    <div className="mx-auto rounded-xl bg-[white] shadow-[0px_4px_3px_rgba(0,_0,_0,_0.07),_0px_2px_2px_rgba(0,_0,_0,_0.06)] max-w-[571px] h-[72px] flex flex-row items-start justify-between mt-[-32px]">
      <div className="flex flex-row items-start justify-start">
        <div className="relative h-[72px] flex flex-col items-start justify-center">
          <div className="cursor-pointer self-stretch flex-1 rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-orange-red flex flex-row py-2 px-0 items-center justify-start z-[0]">
            <div
              onClick={() => openLocationView(true)}
              className="min-w-[150px] rounded-xl flex flex-col py-0 pr-[25px] pl-3 items-start justify-center"
            >
              <p className="relative text-[14px] font-bold text-[#0B4141] leading-[24px] uppercase">
                Location
              </p>
              <p className="relative text-[12px] font-bold leading-[16px] text-[#487171]">
                {activeLocation.label === "All"
                  ? "Find the nearest kip"
                  : activeLocation.label}
              </p>
            </div>
          </div>
          <List
            classOverrides={"w-[80px]"}
            data={locations}
            onChange={setLocation}
            open={isLocationView}
            toggleList={openLocationView}
          />
        </div>
        <div className="relative h-[72px] flex flex-row py-2 px-0 box-border items-center justify-start text-left">
          <div
            onClick={() => openServiceView(true)}
            className="cursor-pointer flex-1 rounded-xl flex flex-col py-0 pr-10 pl-3 items-start justify-center"
          >
            <p className="relative text-[14px] font-bold text-[#0B4141] leading-[24px] uppercase">
              Service
            </p>
            <p className="relative text-[12px] font-bold leading-[16px] text-[#487171]">
              {activeService.label === "All"
                ? "How can we help"
                : activeService.label}
            </p>
          </div>
          <List
            classOverrides={"w-[150px]"}
            data={services}
            onChange={setService}
            open={isServiceView}
            toggleList={openServiceView}
          />
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

const List = ({ data, onChange, open, toggleList, classOverrides }) => {
  return open ? (
    <OutsideClickHandler
      onOutsideClick={() => {
        toggleList(false);
      }}
    >
      <div
        className={`absolute top-16 z-10 bg-white shadow-md rounded py-2 cursor-pointer left-0 ${classOverrides}`}
      >
        {data.map((item) => {
          return (
            <p
              key={item.value}
              className="hover:bg-gray-100 px-4 py-1.5"
              onClick={() => {
                onChange(item);
                toggleList(false);
              }}
            >
              {item.label}
            </p>
          );
        })}
      </div>
    </OutsideClickHandler>
  ) : null;
};
