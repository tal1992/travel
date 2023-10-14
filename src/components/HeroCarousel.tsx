import Carousel from "react-multi-carousel";
import "./HeroCarousel.module.css";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"; // Import the Image component from next/image
import { useEffect, useState } from "react";
export const HeroCarousel = () => {
  const dataReview = [
    {
      image_url: "/assets/bigbenheader.webp",
      image_url_mobile: "/assets/bigbenheader_mobile.webp",
      name: "Big Ben",
      lazyLoad: false,
    },
    {
      image_url: "/assets/cathedral.webp",
      image_url_mobile: "/assets/cathedral_mobile.webp",
      name: "St. Paul Catherdral",
      lazyLoad: false,
    },
    {
      image_url: "/assets/canarywharf.webp",
      image_url_mobile: "/assets/canarywharf_mobile.webp",
      name: "Canary Wharf",
      lazyLoad: false,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const [width, setWidth] = useState<number>(0);

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
    <div>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={5000}
        arrows={true}
        itemClass="carousel-item"
        containerClass={`carousel-container-home`}
      >
        {dataReview.map((item, index) => (
          <div className="mx-0" key={`${item.name}`}>
            <Image
              src={width > 1400 ? item.image_url : item.image_url_mobile}
              alt={item.name}
              className="lg:rounded-xl hero-images"
              layout="responsive"
              width={width > 1400 ? 1920 : 440}
              height={width > 1400 ? 1080 : 295}
              loading={index === 0 ? "eager" : "lazy"} 
            />

            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
              {item.name}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
