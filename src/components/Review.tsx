import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const PeopleReview = (props) => {
  const dataReview = [
    {
      image_url: "/assets/people1.png",
      name: "Allison",
      text: "Visiting the UK was an incredible experience. The blend of historic sites like Buckingham Palace with the warmth of the locals made it truly special. From bustling cities to picturesque landscapes, the UK offers a diverse and unforgettable travel experience."
    },
    {
      image_url: "/assets/people2.png",
      name: "Kattie",
      text: "Roaming the UK from the charming villages to the bustling cities was a fantastic adventure. The rich history, diverse cultures, and stunning landscapes captivated me. Whether wandering through ancient cathedrals or enjoying a pint at a local pub, the UK offers a treasure trove of experiences for any American traveler."
    },
    {
      image_url: "/assets/people3.png",
      name: "Letty",
      text: "Discovering the UK was like unlocking a chest of wonders. From the Scottish Highlands to the streets of London, the journey felt both familiar and foreign. Engaging with the UK's history, people, and scenic beauty created moments that will forever be etched in my American traveler's heart."
    },
    {
      image_url: "/assets/people3.png",
      name: "Letty",
    },
    {
      image_url: "/assets/people3.png",
      name: "Letty",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 500 },
      items: 1,
    },
  };

  return (
    <div className="mt-20">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={false}
        showDots={false}
        infinite={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="pr-8"
      >
        {dataReview.map((item, key) => (
          <div className="bg-white border p-10 rounded-lg" key={key}>
            <p className="leading-relaxed italic">
             {item.text}
            </p>
            <div className="mt-10">
              <div className="flex items-center">
                <img
                  src={item.image_url}
                  alt=""
                  className="h-10 w-10 object-cover"
                />
                <h4 className="ml-5">{item.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
