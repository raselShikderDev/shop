import Banner from "../../assets/website/orange-pattern.jpg";

const Subscribe = () => {
const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <section className="py-14 dark:bg-gray-900 dark:text-white">
      <div
        data-aos="zoom-in"
        style={BannerImg}
        className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      >
        <div className="container backdrop-blur-sm py-10">
          <div className="max-w-xl mx-auto space-y-6">
            <h3 className="font-bold text-2xl sm:text-4xl !text-center sm:text-left">Get Notified About New Products</h3>
            <input data-aos="fade-up" type="text" placeholder="Enter Your Email" className="w-full p-3" />
          </div>
       </div>
      </div>
    </section>
  );
};

export default Subscribe;
