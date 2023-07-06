import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0B4141] flex flex-row flex-wrap pt-5 px-16 pb-16 box-border items-center justify-start gap-[70px] text-bone">
      <img className="relative w-[116px] h-[32.5px]" alt="" src="/logo6.svg" />
      <div className="flex flex-row gap-[10px] flex-wrap items-start justify-start">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <p className="relative text-[14px] leading-[18px] flex items-center w-[197px] text-white">
            Locations
          </p>
          <p className="relative text-[14px] leading-[18px] flex items-center w-[197px] cursor-pointer text-white">
            Services
          </p>
          <p className="relative text-[14px] leading-[18px] flex items-center w-[197px] text-white">
            Blog
          </p>
          <p className="relative text-[14px] leading-[18px] flex items-center w-[197px] text-white">
            Testimonials
          </p>
          <p className="relative text-[14px] leading-[18px] flex items-center w-[197px] text-white">
            Sell us your business
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <p className="relative text-[14px] leading-[18px] flex items-center w-[197px] text-white">
            About Us
          </p>
          <p className="relative text-[14px] leading-[18px] flex items-center w-[197px] text-white">
            Sitemap
          </p>
          <p className="relative text-[14px] leading-[18px] flex items-center w-[197px] text-white">
            Terms and Conditions
          </p>
          <p className="relative text-[14px] leading-[18px] flex items-center w-[197px] text-white">
            Privacy Policy
          </p>
        </div>
        <div className="relative text-[14px] leading-[18px] flex flex-col  max-w-[279px] shrink-0">
          <p className="text-white text-[14px] leading-[18px]">Contact Us</p>
          <p className="text-white text-[14px] leading-[18px]">
            General enquiries: 1800 951 926
          </p>
          <p className="text-white text-[14px] leading-[18px]">
            Centre enquiries: Click Here
          </p>
          <p className="text-white text-[14px] leading-[18px]">
            Email: Hello@Kip.com.au
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
