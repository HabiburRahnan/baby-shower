import { Link, useLoaderData, useParams } from "react-router-dom";
import Gallery from "../Gallery/Gallery";

const ViewsDetails = () => {
  const categories = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const category = categories.find((category) => category.id == idInt);
  const { image, description, price } = category;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img className="w-72 h-60 rounded" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-light-blue-300">{name}</h2>
          <p>{description}</p>
          <div className="card-actions flex justify-between items-center">
            <div>
              <Link>
                <button className="btn bg-pink-300  hover:bg-pink-300 text-white">
                  Add To Card {price}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Gallery></Gallery>
    </div>
  );
};

export default ViewsDetails;
