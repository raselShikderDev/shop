import { FaStar } from "react-icons/fa";
import { productsData } from "./dataTopProdact";

const TopProdact = () => {
  return (
    <section className="py-16 dark:bg-gray-900  dark:text-white">
      <div className="container text-left">
        <p className="text-primary">Top Rated Products for you</p>
        <h2 className="font-semibold text-4xl">Best Products</h2>
        <p className="text-gray-500">
          {/* Explore top-rated products just for you. Best deals await! */}
          Discover the finest selection of products handpicked for you. Get the
          best deals on top-rated items today!
        </p>
        {/* Card section of Best Prodact */}
        <div className="mt-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center">
            {productsData.map((item) => {
              const { id, img, title, description } = item;
              return (
                <div
                  key={id}
                  className=" bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:bg-gray-600 hover:text-white gap-5 py-3 px-5 flex flex-col rounded-md text-center group shadow-xl "
                >
                  {/* max-w-[150px] block  mx-auto  */}
                  <div className="h-[100px]">
                    <img
                      src={img}
                      alt=""
                      className="max-w-[150px] mx-auto drop-shadow-md group-hover:scale-110 block transform -translate-y-20"
                    />
                  </div>
                  {/* text of card */}
                  <div className="text-center p-4">
                    <div className="flex gap-2 items-center justify-center">
                      <FaStar className="text-yellow-500 text-xl" />
                      <FaStar className="text-yellow-500 text-xl" />
                      <FaStar className="text-yellow-500 text-xl" />
                      <FaStar className="text-yellow-500 text-xl" />
                    </div>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="">{description}</p>
                    <button onClick={()=> alert("Sorry! We're not accepting order ourrently.")} className="bg-primary mt-4 px-4 py-2 rounded-full text-white hover:scale-105 group-hover:bg-white group-hover:text-primary">
                      Order Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProdact;
