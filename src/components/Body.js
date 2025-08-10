import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Varible - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // Normal JS variable - Not reactive, not powerful
  //   let listOfRestaurants = [];

  // Normal JS variable
  //   let listOfRestaurantsJS = [
  //     {
  //       info: {
  //         id: "514911",
  //         name: "KFC",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/487a52e2-2ee9-482f-90eb-2054de4a079a_514911.JPG",
  //         locality: "Huda Market",
  //         areaName: "Sector 37",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 4.2,
  //         parentId: "547",
  //         avgRatingString: "4.2",
  //         totalRatingsString: "3.4K+",
  //         sla: {
  //           deliveryTime: 26,
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "514912",
  //         name: "Domino's Pizza",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/487a52e2-2ee9-482f-90eb-2054de4a079a_514911.JPG",
  //         locality: "Huda Market",
  //         areaName: "Sector 37",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 3.8,
  //         parentId: "547",
  //         avgRatingString: "3.8",
  //         totalRatingsString: "3.4K+",
  //         sla: {
  //           deliveryTime: 26,
  //         },
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic here
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.info.avgRating > 4.0
            // );
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.0
            );
            setListOfRestaurants(filteredList);
            // console.log("Top Rated Restaurants", listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard
        //   resName="KFC"
        //   cuisine="Burgers, Fast Food, Rolls & Wraps"
        resData={resObj}
        /> */}
        {/* <RestaurantCard resName="Pizza Hut" cuisine="Pizzas" /> */}
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} />
        <RestaurantCard resData={resList[10]} />
        <RestaurantCard resData={resList[11]} />
        <RestaurantCard resData={resList[12]} />
        <RestaurantCard resData={resList[13]} />
        <RestaurantCard resData={resList[14]} />
        <RestaurantCard resData={resList[15]} />
        <RestaurantCard resData={resList[16]} />
        <RestaurantCard resData={resList[17]} /> */}
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
          // resList.map((restaurant, index) => {
          //   return <RestaurantCard key={index} resData={restaurant} />; // bad practice, but works for now
        })}
      </div>
    </div>
  );
};

export default Body;
