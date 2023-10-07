const Banner = () => {
  return (
    <div className="hero  max-h-screen mx-auto bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/zbkQLX7/banner2.jpg"
          className=" rounded-lg md:w-96 shadow-2xl"
        />

        <div>
          <h1 className="text-4xl md:text-8xl text-center md:text-start text-pink-300 font-extrabold">
            BABY <h1 className="text-light-blue-300">SHOWER </h1> PARTY
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
