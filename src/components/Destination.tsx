import React from "react";
import Link from "next/link";
export const Destination = () => {
  const dataImage = [
    {
      name: "Buckingham palace",
      image_url: "assets/blog/buchingham.webp",
      rate: "4.6",
      link: "/buckingham-palace",
    },
    {
      name: "Big Ben",
      image_url: "assets/bigbenheader.webp",
      rate: "4.8",
      link: "/big-ben",
    },
    {
      name: "Cotswolds",
      image_url: "assets/blog/cotswolds.webp",
      rate: "4.7",
      link: "/cotswolds",
    },
    {
      name: "Hampstead Heath",
      image_url: "assets/blog/hampstead.webp",
      rate: "4.7",
      link: "/hampstead",
    },
    {
      name: "Canary Wharf",
      image_url: "assets/blog/canary.webp",
      rate: "4.6",
      link: "/canary-wharf",
    },
    {
      name: "Tower Bridge",
      image_url: "assets/blog/tower-bridge.jpg",
      rate: "4.8",
      link: "/tower-bridge",
    },
    {
      name: "British Museum",
      image_url: "assets/blog/british-museum.webp",
      rate: "4.8",
      link: "/british-museum",
    },
    {
      name: "Sky Garden",
      image_url: "assets/blog/sky-gardens.webp",
      rate: "4.6",
      link: "/sky-garden",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
      {dataImage.map((item, key) => (
        <div className="" key={key}>
          <Link href={item.link}>
            <img
              src={item.image_url}
              className="object-cover rounded-md hover:opacity-75 card-images"
              alt={item.name}
            />

            <div className="py-3">
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
                <label className="mx-2 text-sm">{item.rate}</label>
              </div>
              <div className="">
                <h4 className="font-semibold mt-1">{item.name}</h4>
                <label htmlFor="" className="text-gray-500">
                  17 place to visit
                </label>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
