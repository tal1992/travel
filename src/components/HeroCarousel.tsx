import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const HeroCarousel = () => {
  const dataReview = [
    {
      image_url:
        "/assets/bigbenheader.webp",
      name: "Big Ben",
    },
    {
      image_url:
      "/assets/cathedral.webp",
      name: "St. Paul Catherdral",
    },
    {
      image_url:
      "/assets/canarywharf.webp",
      name: "Canary Wharf"
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
      breakpoint: { max: 500, min: 500 },
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
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
      >
        {dataReview.map((item, key) => (
          <div className="mx-2" key={key}>
            <img src={item.image_url} alt="" className="rounded-xl" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
