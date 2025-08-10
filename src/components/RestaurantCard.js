import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
//   const { resName, cuisine } = props;
const {resData} = props;
const {cloudinaryImageId, name, cuisines, avgRating} = resData?.info;
  console.log(props);
//   if (!resData || !resData.info) return null; // ✅ prevent rendering if no data
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/487a52e2-2ee9-482f-90eb-2054de4a079a_514911.JPG"
        src={CDN_URL+cloudinaryImageId}
      />
      {/* <h3>KFC</h3>
            <h4>Burgers, Fast Food, Rolls & Wraps</h4>
            <h4>4.2 stars</h4> */}
      {/* <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4> */}
      {/* <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.2 stars</h4> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      {/* <h4>25-30 mins</h4> */}
    </div>
  );
};

export default RestaurantCard;