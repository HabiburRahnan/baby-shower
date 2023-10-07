import { useLoaderData } from "react-router-dom";
import Views from "./Views";

const ViewsDetails = () => {
  const singleCard = useLoaderData();

  return (
    <div>
      {singleCard.map((category) => (
        <Views key={category.id} category={category}></Views>
      ))}
      {/* <Views singleCard={singleCard}></Views> */}
    </div>
  );
};

export default ViewsDetails;
