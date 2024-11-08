import { FaStar } from "react-icons/fa";
import { productsData } from "./dataProdacts";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Prodacts = () => {
  useEffect(() => {
    Aos.init({});
  });
  return (
    <section className="py-12 dark:bg-gray-900 dark:text-white">
      {/* Header Text section */}
      <div className="container text-center">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-primary"
        >
          Top Selling Products for you
        </p>
        <h2 data-aos="fade-down"
          data-aos-duration="1000" className="text-4xl font-semibold">Products</h2>
        <p data-aos="fade-down"
          data-aos-duration="1000" className="text-slate-400 ">
          Find your favorites among our bestsellers. Great deals and top picks
          await!
        </p>
        {/* prodact card section */}
        <div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {productsData.map((item) => {
              const { id, img, title, rating, color, aosDelay } = item;
              return (
                <div
                  key={id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={aosDelay}
                  className="pt-12 text-left flex flex-col gap-4"
                >
                  <img
                    src={img}
                    alt=""
                    className="rounded-xl object-cover w-[150px] h-[220px]"
                  />
                  <div>
                    <h3 className="font-semibold text-xl">{title}</h3>
                    <p className="text-slate-500">{color}</p>
                    <p className=" flex items-center gap-2">
                      <FaStar className="text-yellow-500 text-xl" />{" "}
                      <span>{rating}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-md text-white hover:scale-110">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prodacts;
