import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { footerLinks } from "./datFooter";
import logoFooter from "../../assets/logo.png";
import bgBanner from "../../assets/website/footer-pattern.jpg";

const Footer = () => {
  const footerBg = {
    backgroundImage: `url(${bgBanner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <section style={footerBg} className="py-20 text-white">
      <div data-aos="zoom-in" data-aos-duration="500" className="container grid gap-y-5 sm:gap-y-0 md:grid-cols-3 pb-10 sm:pb-20">
        {/* Company Details */}
        <div className="space-y-4">
          <h1 className="flex gap-2 items-center">
            <img src={logoFooter} alt="" className="max-w-[50px]" />
            <p className="text-3xl font-bold">ShopyHub</p>
          </h1>
          <p className="sm:text-[19px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
            beatae ea recusandae blanditiis veritatis.
          </p>
        </div>
        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
          <div>
            <div className="pb-8 px-4">
              <h1 className="text-2xl font-semibold">Important Links</h1>
              <ul className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="pb-8 px-4">
              <h1 className="text-2xl font-semibold">Links</h1>
              <ul className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Socal Icons & Links */}
          <div>
            <div className="pb-8 px-4">
            <div className="flex gap-2 mb-5">
                <a href="#">
                  <FaLinkedin className="text-3xl " />
              </a>
                <a href="#">
                  <FaInstagram className="text-3xl " />
              </a>
                <a href="#">
                  <FaFacebook className="text-3xl " />
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+8801234567890</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
