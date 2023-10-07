import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Category = ({ category }) => {
  const { id, image, name, price, description, button } = category;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img className="w-72 h-60 rounded" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-light-blue-300">{name}</h2>
          <p>{description.slice(0, 150)}</p>
          <div className="card-actions flex justify-between items-center">
            <div>
              <Link to={`/views${id}`}>
                <button className="btn bg-pink-300  hover:bg-pink-300 text-white">
                  {button.text}
                </button>
              </Link>
            </div>
            <div>
              <p className="text-xl text-light-blue-600 font-bold">{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
