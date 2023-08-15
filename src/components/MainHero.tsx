import React from "react";
import {HeroCarousel} from "./HeroCarousel";

export const MainHero = () => {
  return (
    <div className="lg:py-20 lg:pb-10" style={{ backgroundColor: "#FFF7F5" }}>
      <div className="flex justify-between items-start px-0 lg:px-20">
        <div className="w-full hidden lg:block lg:w-2/5">
          <h1 className="text-4xl font-bold">London is Calling !</h1>
          <div className="bg-white shadow-sm p-5 mt-5 rounded-lg">
            <input
              type="text"
              className="bg-gray-200 text-gray-700 py-3 px-3 w-full rounded focus:outline-none"
              placeholder="Search your destination"
            />
            <div className="flex my-4">
              <label htmlFor="" className="mr-5 text-gray-600">
                #beach
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #mountain
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #climb
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #dive
              </label>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 lg:block">
          {/* <img
            src="/assets/bigbenheader.jpg"
            alt=""
            className="block w-full right-0 object-cover"
            style={{ borderRadius: "0px 0px 0px 7rem" }}
          /> */}

          <HeroCarousel />
        </div>
      </div>
    </div>
  );
};
