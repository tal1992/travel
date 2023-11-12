import React from "react";
import Link from "next/link";
import LazyLoadImage from "./LazyLoadImage";
import {featured} from '../data/featured';
import Image from "next/image"; // Import the Image component from next/image
export const Featured = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
      {featured.filter(elem => elem.landingTag === 'featured-destinations').map((item, key) => (
        <div className="" key={key}>
          <Link href={item.link} title={item.name}>
          <LazyLoadImage src={item.image_url_mobile} alt={item.name} className="object-cover rounded-md hover:opacity-75 card-images mobile-width-full"/>

            <div className="py-3">
              <div className="flex items-center">
              </div>
              <div className="">
                <h4 className="font-semibold mt-1">{item.name}</h4>
                <label htmlFor="" className="text-gray-700">
                  {item.category}
                </label>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
