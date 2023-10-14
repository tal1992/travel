import React, { useEffect, useState } from "react";
import LazyLoadImage from "../LazyLoadImage";
import Link from "next/link";
import Image from "next/image";

export const ArticleHero = ({ src, alt }: { src: string; alt: string }) => {
  const [width, setWidth] = useState<number>(0);
  const srcpath = `/${src}`;
  const [imagepath, setImagePath] = useState<string>(srcpath);


  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="pb-5">
      <div className="flex justify-between items-center mobile-width-full">

        <div className="lg:block">
          <Image
            src={width < 420 ? imagepath: imagepath}
            alt={alt}
            className="block w-full right-0 object-cover"
            layout={width > 420 ? "responsive": 'raw'}
            width={width > 420 ? 1800: 440}
            height={width > 420 ? 1200: 300}
            loading={"eager"}
          />
        </div>
      </div>
    </div>
  );
};
