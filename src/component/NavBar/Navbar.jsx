import logo from "../../assets/logo.png";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import DarkModeNav from "./DarkModeNav";
import { navDropdownLinks, navMenu } from "./dataNav";

const Navbar = () => {
  return (
    <section className="shadow-md bg-white dark:bg-gray-900 z-40 dark:text-white">
      <div className="">
        {/* Upper Navbar */}
        <div className="bg-primary/40 py-2">
          <div className="flex justify-between container">
            {/* Logo Section */}
            <div>
              <div className="flex font-semibold text-2xl sm:text-3xl gap-2 justify-between items-center">
                <img width="45px" src={logo} alt="Logo" className="w-[50px" />
                <p>ShopyHub</p>
              </div>
            </div>
            {/* Search Bar and  cart  sectiion */}
            <div className="flex justify-between gap-4 items-center">
              <div className="group relative hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-w[200px] rounded-full border border-primary outline-primary group-hover:w-[300px] focus:outline-none focus:border-1 focus:border-primary dark:bg-gray-800 dark:border-gray-500 px-3 py-1"
                />
                <IoMdSearch className="group-hover:text-primary text-gray-500 absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
              <button
                onClick={() => alert("Currently Ordering is not Available")}
                className="text-white bg-gradient-to-r from-primary to-secondary px-4 py-1 transition-all duration-200 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaShoppingCart className="text-white text-xl drop-shadow-sm cursor-pointer " />
              </button>
              <DarkModeNav />
            </div>
          </div>
        </div>
        {/* Lower navbar menu section*/}
        <div>
          <div className="container flex justify-center">
            <nav>
              <ul className="py-1.5 hidden sm:flex items-center gap-3">
                {navMenu.map((menu) => {
                  const { id, name, link } = menu;
                  return (
                    <li key={id}>
                      <a
                        className="inline-block px-4 hover:text-primary duration-200"
                        href={link}
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
                <li className="group relative cursor-pointer">
                  <a
                    className="flex gap-[3px] items-center hover:text-primary duration-200"
                    href="#"
                  >
                    Trendings{" "}
                    <span className="group-hover:rotate-180">
                      <FaCaretDown />
                    </span>
                  </a>
                  <div className="hidden bg-white w-[200px] absolute group-hover:block text-black z-[999] rounded-md pt-2 shadow-md">
                    <ul className="flex flex-col gap-1">
                      {navDropdownLinks.map((item) => {
                        const { id, name, link } = item;
                        return (
                          <li key={id}>
                            <a
                              className="hover:bg-primary/20 inline-block w-full p-2 duration-200"
                              href={link}
                            >
                              {name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
