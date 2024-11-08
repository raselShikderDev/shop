import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

import image from "../../assets/women/women2.jpg";
const BannerWinter = () => {
  return (
    <section className="max-h-[550px] py-12 flex justify-center items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Winter Collection image section */}
          <div>
            <img
              src={image}
              alt="Winter Collection"
              className="object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] max-w-[400px] h-[350px] w-full mx-auto"
            />
          </div>
          {/* Winter Collection Text section */}
          <div className="">
            <h3 className="font-bold text-4xl mb-8">
              Winter Sale upto 50% Off
            </h3>
            <p className="text-gray-400 mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                {" "}
                <GrSecure className="text-4xl shadow-sm w-10 h-10 p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div className="flex items-center gap-4">
                <IoFastFood className="text-5xl shadow-sm w-10 h-10 p-2 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl shadow-sm w-10 h-10 p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div className="flex items-center gap-4">
                {" "}
                <IoFastFood className="text-4xl shadow-sm w-10 h-10 p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerWinter;
