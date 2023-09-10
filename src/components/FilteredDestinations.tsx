import React from "react";
import Link from "next/link";

interface Location {
  name: string;
  image_url: string;
  rate: string;
  link: string;
  landingTag: string;
  category: string;
}

interface Props {
  locations: Location[];
}

const FilteredDestinations: React.FC<Props> = ({ locations }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-4">
      {locations.map((location, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md">
          <Link href={location.link}>
            <img
              src={location.image_url}
              alt={location.name}
              className="object-cover rounded-t-lg w-full h-40"
            />
          </Link>
          <div className="p-4">
            <h2 className="text-lg font-semibold">{location.name}</h2>
            {/* <p className="text-gray-500">{location.category}</p> */}
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-red-500 fill-current"
              >
                <g data-name="Layer 2">
                  <g data-name="star">
                    <rect
                      width="24"
                      height="24"
                      transform="rotate(90 12 12)"
                      opacity="0"
                    />
                    <path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z" />
                  </g>
                </g>
              </svg>
              <label className="mx-2 text-sm">{location.rate}</label>
            </div>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredDestinations;
