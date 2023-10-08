import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import Banner from "../../Header/Banner/Banner.jsx";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="py-6">
        <h3 className="text-5xl text-center font-medium text-light-blue-300">
          Our Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10">
          {categories.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </div>

      <div className="flex-1 lg:flex  justify-around  lg:my-14">
        <div className="grid md:grid-cols-2  text-center md:text-start bg-base-100 shadow-xl mx-9 mb-14 md:mb-0">
          <div>
            <h1 className="text-5xl ">
              <span className="text-pink-500 text-6xl font-bold">
                75% discount
              </span>
              <br />
              <br /> on baby shower
              <br /> for the month of October
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <img src="https://i.ibb.co/F5L4JGs/bby-shower.jpg" alt="" />
          </div>
        </div>

        <div className="card card-compact   bg-base-100 shadow-xl">
          <figure>
            <img
              className="rounded"
              src="https://i.ibb.co/XpqhDdQ/download.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <p className="text-4xl font-bold text-center text-light-blue-300">
              Baby shower
            </p>
          </div>
        </div>
      </div>

      <div className="py-6">
        <h3 className="text-5xl text-center font-bold text-pink-500 mb-6">
          GALLERY
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <img
            className="w-96 h-80 rounded-lg"
            src="https://i.ibb.co/VJ47zzy/download-2.jpg"
            alt=""
          />
          <img
            className="w-96 h-80 rounded-lg"
            src="https://i.ibb.co/CnbBYCM/images.jpg"
            alt=""
          />
          <img
            className="w-96 h-80 rounded-lg"
            src="https://i.ibb.co/xLCJFxZ/download-4.jpg"
            alt=""
          />
          <img
            className="w-96 h-80 rounded-lg"
            src="https://i.ibb.co/F077syx/download-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
