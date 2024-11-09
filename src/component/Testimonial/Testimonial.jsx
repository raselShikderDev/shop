import { settings, testimonialData } from "./dataTestimonial";
import Slider from "react-slick";

const Testimonial = () => {
  return (
    <section className="py-12 dark:bg-gray-900 dark:text-white">
      <div className="container">
        <div className="text-center mb-14">
          <p data-aos="fade-up" data-aos-duration="500" className="text-primary">What our customers are saying</p>
          <h2 data-aos="fade-up" data-aos-duration="500"  className="text-4xl font-bold">Testimonials</h2>
          <p data-aos="fade-up" data-aos-duration="500"  className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Testmonial Card section */}
        <div data-oas="zoom-in" className="">
          <Slider {...settings}>
            {testimonialData.map((item) => {
              const { id, name, text, img } = item;
              return (
                <div key={id}>
                  <div
                  
                  className="rounded-xl py-8 px-6 my-6 mx-4 flex flex-col gap-5 bg-primary/10 dark:bg-gray-800 shadow-xl relative"
                >
                  {/* image section  */}
                  <div>
                    <div>
                      <img
                        src={img}
                        alt=""
                        className="rounded-full w-20 h-20 drop-shadow-sm"
                      />
                    </div>
                  </div>
                  {/* Text section  */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-gray-400  text-justify">{text}</p>
                      <h3 className="text-2xl font-semibold dark:text-gray-300">{name}</h3>
                    </div>
                    </div>
                    <p className="text-9xl font-serif text-black/20 dark:text-gray-400 absolute top-0 right-0">,,</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
