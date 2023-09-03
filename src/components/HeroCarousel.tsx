import Carousel from "react-multi-carousel";
import "./HeroCarousel.module.css";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"; // Import the Image component from next/image
export const HeroCarousel = () => {
  const dataReview = [
    {
      image_url: "/assets/bigbenheader.webp",
      name: "Big Ben",
      lazyLoad: false,
    },
    {
      image_url: "/assets/cathedral.webp",
      name: "St. Paul Catherdral",
      lazyLoad: false,
    },
    {
      image_url: "/assets/canarywharf.webp",
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

  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={5000}
        arrows={true}
        itemClass="carousel-item"
        containerClass={`carousel-container-home`}
      >
        {dataReview.map((item) => (
          <div className="mx-0" key={`${item.name}`}>
            <Image
              src={item.image_url}
              alt={item.name}
              width={1920} // Adjust the width and height as needed
              height={1080}
              className="lg:rounded-xl hero-images"
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
