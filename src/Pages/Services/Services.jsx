/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";

const Services = () => {
  const servicesItems = useLoaderData();
  //   const { image, name, price, description, button } = servicesItem;
  return (
    <div>
      <h3 className="text-5xl text-center font-medium text-light-blue-300 m-10">
        Our Services
      </h3>
      <div className="grid md:grid-cols-2 gap-10">
        {servicesItems.map((servicesItem) => (
          <div className="card  bg-base-100 shadow-xl">
            <div>
              <figure>
                <img
                  className="w-96 h-60 rounded"
                  src={servicesItem.image}
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title">{servicesItem.name}</h2>
              <p>{servicesItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
