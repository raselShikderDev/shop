import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageList, settings } from "./dataHero.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({});
  });
  return (
    <section className=" relative overflow-hidden flex justify-center items-center duration-200 min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-950 dark:text-white ">
      {/* Background Pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 rotate-45 absolute -top-1/2 rounded-3xl right-0 -z-9 "></div>
      {/* Hero section Start */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {imageList.map((item) => {
            const { id, description, title, img } = item;
            return (
              <div key={id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text contents of Hero */}
                  <div className="flex flex-col justify-center gap-4 z-10 order-2 sm:order-1 relative">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className=" text-4xl sm:text-4xl lg:text-7xl font-bold leading-tight"
                    >
                      {title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className=""
                    >
                      {description}
                    </p>
                    <div>
                      <button
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-once="true"
                        data-aos-delay="500"
                        onClick={()=> alert("Sorry! We're not accepting order ourrently.")}
                        className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full text-white hover:scale-105"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                  {/* Image Section of Hero */}
                  <div className="">
                    <div className=" z-10 relative">
                      <img
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] object-contain mx-auto sm:scale-125"
                        src={img}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
