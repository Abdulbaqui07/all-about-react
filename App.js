/**
 *
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an H1 tag!</h1>
 *     <h2>I am an H2 tag!</h1>
 *   </div>
 * <div id="child2">
 *     <h1>I am an H1 tag!</h1>
 *     <h2>I am an H2 tag!</h1>
 *   </div>
 * </div
 *
 * ReactElement(Object) => HTML(Browser understands)
 * */

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         // React.createElement("h1", {}, "I am an H1 tag!")));
//         [React.createElement("h1", {}, "I am an H1 tag!"), React.createElement("h2", {}, "I am an H2 tag!")]
//     ));

// import React from "react";
// import ReactDOM from "react-dom/client";
// const parent = React.createElement("div", { id: "parent" },
//     [
//         React.createElement("div", { id: "child" },
//             // React.createElement("h1", {}, "I am an H1 tag!")));
//             [React.createElement("h1", {}, "This is React Course"), React.createElement("h2", {}, "Learn React from Scratch")]
//         ), React.createElement("div", { id: "child2" },
//             // React.createElement("h1", {}, "I am an H1 tag!")));
//             [React.createElement("h1", {}, "I am an H1 tag!"), React.createElement("h2", {}, "I am an H2 tag!")]
//         )
//     ]
// );

// // Above code is untidy that's why we can use JSX

// // const heading = React.createElement("h1", { id: "heading", xyz: "abc " }, "Welcome to the React World!");

// // console.log(heading);
// console.log(parent);

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot(document.getElementById("header"));
// // root.render(heading);
// root.render(parent);

// import React from "react";
// import ReactDOM from "react-dom/client";

// /**
//  * Header
//  *  - Logo
//  *  - Nav Items
//  * Body
//  *  - Search
//  *  - RestaurantContainer
//  *   - RestaurantCard
//  * Footer
//  *  - Copyright
//  *  - Links
//  *  - Address
//  *  - Contact
//  */

// // React.creatElement => ReactElement-Object => HTMLElement(render)
// // const heading = React.createElement("h1",  { id: "heading"}, "Welcome to the React World!");
// // console.log(heading);

// // JSX - is no HTML in JavaScript   HTML-like or XML-like syntax
// // JSX (transpiled before it reaches the browser) transpiled by - Parcel - babel - webpack
// // JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// // const jsxHeading = <h1 id="heading" className="head" tabIndex="1">Welcome to the React World!</h1>
// // console.log(jsxHeading);
// // React Element - Object
// // const heading = (
// //   <h1 id="heading" className="head" tabIndex="1">
// //     Welcome to the React World!
// //   </h1>
// // );

// // React Component
// // Class Based Component - OLD
// // Functional Component - NEW

// // React Functional Component
// // const Heading = () => {
// //     return (<h1 id="heading" className="head" tabIndex="1">React Functional Component</h1>);
// // }

// // Title component

// const elem = (<span> React Element</span>)
// // React element
// const title = (
//   <h1 id="heaing" className="head" tabIndex="1">
//     Welcome to React
//     {elem}
//   </h1>
// );
// // Using function keyword
// // const Title = function() {
// //     return (<h1 id="heaing" className="head" tabIndex="1">
// //         React using JSX
// //     </h1>);
// // }
// // Using arrow syntax
// // const Title = () => (
// //     <h1 id="heading" className="head" tabIndex="1">
// //       React using JSX
// //     </h1>
// // );

// // const number = 70000;

// // Component Composition
// const Heading2 = () => (
//   <div id="container">
//     {/* <Title /> */}
//     {title}
//     <h2>{200 + 300}</h2>
//     <h1 id="heading" className="head" tabIndex="1">
//       React Functional Component
//     </h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// // root.render(jsxHeading);
// // root.render(heading);
// root.render(<Heading2 />);

import React from "react";
import ReactDOM from "react-dom/client";

// /**
//  * Header
//  *  - Logo
//  *  - Nav Items
//  * Body
//  *  - Search
//  *  - RestaurantContainer
//  *   - RestaurantCard
//  *    - Name of the Restaurant, Star Rating, Cuisine, Delivery Time
//  * Footer
//  *  - Copyright
//  *  - Links
//  *  - Address
//  *  - Contact
//  */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
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

const resList = [
{
"info": {
"id": "514911",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/487a52e2-2ee9-482f-90eb-2054de4a079a_514911.JPG",
"locality": "Huda Market",
"areaName": "Sector 37",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.2,
"parentId": "547",
"avgRatingString": "4.2",
"totalRatingsString": "3.4K+",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 3.6,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/kfc-huda-market-sector-37-rest514911",
"type": "WEBLINK"
}
},
{
"info": {
"id": "125878",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/dad2ee5b-536b-4d6c-b42f-8dad70b1df6f_125878.jpg",
"locality": "Old Rly Road",
"areaName": "Sector 4",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.3,
"parentId": "166",
"avgRatingString": "4.3",
"totalRatingsString": "42K+",
"sla": {
"deliveryTime": 23,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 05:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
"description": "bolt!"
},
{
"imageId": "Rxawards/_CATEGORY-Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "861"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/burger-king-old-rly-road-sector-4-rest125878",
"type": "WEBLINK"
}
},
{
"info": {
"id": "807690",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/abfa0526-fe57-4971-84c3-b7a14b9cad23_807690.JPG",
"locality": "Jailland",
"areaName": "Sector- 11",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4,
"parentId": "721",
"avgRatingString": "4.0",
"totalRatingsString": "1.2K+",
"sla": {
"deliveryTime": 20,
"lastMileTravel": 0.6,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "0.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 04:45:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/pizza-hut-jailland-sector-11-rest807690",
"type": "WEBLINK"
}
},
{
"info": {
"id": "651214",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/e21d1285-b7ff-4233-a6d5-f442916bab5c_651214.JPG",
"locality": "Huda Market",
"areaName": "Sector 77",
"costForTwo": "₹400 for two",
"cuisines": [
"American",
"Fast Food"
],
"avgRating": 4.4,
"parentId": "630",
"avgRatingString": "4.4",
"totalRatingsString": "8.0K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 01:45:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹117"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/mcdonalds-huda-market-sector-77-rest651214",
"type": "WEBLINK"
}
},
{
"info": {
"id": "594820",
"name": "Chinese Wok",
"cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
"locality": "Sector 34",
"areaName": "Sector 15",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese"
],
"avgRating": 4.1,
"parentId": "61955",
"avgRatingString": "4.1",
"totalRatingsString": "1.7K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 2.4,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹129"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/chinese-wok-sector-34-sector-15-rest594820",
"type": "WEBLINK"
}
},
{
"info": {
"id": "612059",
"name": "Domino's Pizza",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/13/1c05adf3-8d3b-4eeb-a0e2-ec5fb597ecb3_612059.JPG",
"locality": "Sadar Bazar",
"areaName": "Sector 11",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
"avgRating": 4.3,
"parentId": "2456",
"avgRatingString": "4.3",
"totalRatingsString": "1.9K+",
"sla": {
"deliveryTime": 20,
"lastMileTravel": 0.6,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "0.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-25 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
"description": "bolt!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹79"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/dominos-pizza-sadar-bazar-sector-11-rest612059",
"type": "WEBLINK"
}
},
{
"info": {
"id": "769964",
"name": "Olio - The Wood Fired Pizzeria",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/4b2be68d-efa3-4ce1-af23-30428c2a0d80_769964.JPG",
"locality": "Sector 33",
"areaName": "Near Goga Mandir",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Fast Food",
"Snacks",
"Beverages",
"Desserts"
],
"avgRating": 4.1,
"parentId": "11633",
"avgRatingString": "4.1",
"totalRatingsString": "1.2K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 06:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/olio-the-wood-fired-pizzeria-sector-33-near-goga-mandir-rest769964",
"type": "WEBLINK"
}
},
{
"info": {
"id": "21742",
"name": "Wow! Momo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/cece6e12-8d20-4301-b892-9cf2b052b518_21742.jpg",
"locality": "Huda Market",
"areaName": "Huda City",
"costForTwo": "₹300 for two",
"cuisines": [
"Momos",
"Chinese",
"fastfood",
"Asian",
"Beverages"
],
"avgRating": 3.8,
"parentId": "1776",
"avgRatingString": "3.8",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 3.7,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 04:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.8",
"ratingCount": "423"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/wow-momo-huda-market-huda-city-rest21742",
"type": "WEBLINK"
}
},
{
"info": {
"id": "464438",
"name": "The Belgian Waffle Co.",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/729daf31-5488-48f0-8c2e-5a1c4ce1bd63_464438.jpg",
"locality": "Sector 14",
"areaName": "Sector 14",
"costForTwo": "₹200 for two",
"cuisines": [
"Waffle",
"Desserts",
"Ice Cream"
],
"avgRating": 4.6,
"parentId": "2233",
"avgRatingString": "4.6",
"totalRatingsString": "2.0K+",
"sla": {
"deliveryTime": 38,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 04:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "109"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/the-belgian-waffle-co-sector-14-rest464438",
"type": "WEBLINK"
}
},
{
"info": {
"id": "27891",
"name": "Bakingo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/9ad2b022-123b-48d7-871e-80b096d8b464_27891.jpg",
"locality": "Old DLF Colony",
"areaName": "Sector 14",
"costForTwo": "₹300 for two",
"cuisines": [
"Bakery",
"Desserts",
"Beverages",
"Snacks"
],
"avgRating": 4.6,
"parentId": "3818",
"avgRatingString": "4.6",
"totalRatingsString": "19K+",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/bakingo-old-dlf-colony-sector-14-rest27891",
"type": "WEBLINK"
}
},
{
"info": {
"id": "259714",
"name": "NIC Ice Creams",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/0f540f4e-11b3-42dc-b95f-a9ff4d155e2d_259714.JPG",
"locality": "Mata Road",
"areaName": "Sector 14",
"costForTwo": "₹120 for two",
"cuisines": [
"Ice Cream",
"Desserts"
],
"avgRating": 4.6,
"veg": true,
"parentId": "6249",
"avgRatingString": "4.6",
"totalRatingsString": "4.5K+",
"sla": {
"deliveryTime": 21,
"lastMileTravel": 2.3,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹124"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/nic-ice-creams-mata-road-sector-14-rest259714",
"type": "WEBLINK"
}
},
{
"info": {
"id": "847264",
"name": "Kwality Walls Ice Cream and More",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/c704cca8-ca16-4c40-ab47-a76110113c80_847264.JPG",
"locality": "Patel Nagar",
"areaName": "Sector-14",
"costForTwo": "₹200 for two",
"cuisines": [
"Ice Cream",
"Desserts"
],
"avgRating": 4.5,
"veg": true,
"parentId": "582",
"avgRatingString": "4.5",
"totalRatingsString": "299",
"sla": {
"deliveryTime": 23,
"lastMileTravel": 1.9,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 02:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
"description": "bolt!"
},
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
}
},
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/kwality-walls-ice-cream-and-more-patel-nagar-sector-14-rest847264",
"type": "WEBLINK"
}
},
{
"info": {
"id": "443494",
"name": "EatFit",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/ab029123-f12b-4c38-a7f3-7a213d46dd2d_443494.jpg",
"locality": "ISLAMPUR",
"areaName": "Sohna Road",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese",
"Healthy Food",
"Tandoor",
"Pizzas",
"North Indian",
"Thalis",
"Biryani"
],
"avgRating": 4.3,
"parentId": "76139",
"avgRatingString": "4.3",
"totalRatingsString": "3.1K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/eatfit-islampur-sohna-road-rest443494",
"type": "WEBLINK"
}
},
{
"info": {
"id": "812",
"name": "Bikkgane Biryani",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/b17f9b33-1168-4232-9a41-07557d1c66c0_812.jpg",
"locality": "Sector 39",
"areaName": "Huda City",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"Mughlai"
],
"avgRating": 4.4,
"parentId": "5070",
"avgRatingString": "4.4",
"totalRatingsString": "38K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 3.6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 04:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Biryani.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.0",
"ratingCount": "767"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/bikkgane-biryani-sector-39-huda-city-rest812",
"type": "WEBLINK"
}
},
{
"info": {
"id": "538517",
"name": "The Dessert Heaven - Pastry, Brownie and Cakes",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/7c2055be-2cee-47bb-aa69-f5b3dcd73deb_538517.jpg",
"locality": "NEAR GUGA MANDIR",
"areaName": "sohna road",
"costForTwo": "₹200 for two",
"cuisines": [
"Bakery",
"Desserts",
"Sweets",
"Ice Cream"
],
"avgRating": 4.1,
"veg": true,
"parentId": "506176",
"avgRatingString": "4.1",
"totalRatingsString": "222",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 02:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/the-dessert-heaven-pastry-brownie-and-cakes-near-guga-mandir-sohna-road-rest538517",
"type": "WEBLINK"
}
},
{
"info": {
"id": "486182",
"name": "Chicago Pizza",
"cloudinaryImageId": "kwtd1gah2ad3xf6xrxwh",
"locality": "The Esplanade Mall",
"areaName": "Sector 37",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Fast Food"
],
"avgRating": 3.9,
"parentId": "60277",
"avgRatingString": "3.9",
"totalRatingsString": "442",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-25 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/chicago-pizza-the-esplanade-mall-sector-37-rest486182",
"type": "WEBLINK"
}
},
{
"info": {
"id": "11748",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/be04be13-44f9-44cc-9650-f48b9f363455_11748.jpg",
"locality": "DLF Phase - 4",
"areaName": "Sector 7",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.3,
"parentId": "2",
"avgRatingString": "4.3",
"totalRatingsString": "27K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 04:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
"description": "bolt!"
},
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "1.2K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/subway-dlf-phase-4-sector-7-rest11748",
"type": "WEBLINK"
}
},
{
"info": {
"id": "594830",
"name": "Big Bowl",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_594830.JPG",
"locality": "Sector 34",
"areaName": "Sector 15",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese",
"Biryani"
],
"avgRating": 4.2,
"parentId": "434792",
"avgRatingString": "4.2",
"totalRatingsString": "811",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 2.4,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-26 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹129"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/big-bowl-sector-34-sector-15-rest594830",
"type": "WEBLINK"
}
},
{
"info": {
"id": "20138",
"name": "Harish Bakery",
"cloudinaryImageId": "jkuj5aui7wwmwc0eidog",
"locality": "Huda Shopping Center",
"areaName": "Sadar Bazar",
"costForTwo": "₹350 for two",
"cuisines": [
"North Indian",
"South Indian",
"Desserts"
],
"avgRating": 4.4,
"parentId": "1676",
"avgRatingString": "4.4",
"totalRatingsString": "37K+",
"sla": {
"deliveryTime": 22,
"lastMileTravel": 0.3,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "0.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-25 22:30:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/harish-bakery-huda-shopping-center-sadar-bazar-rest20138",
"type": "WEBLINK"
}
},
{
"info": {
"id": "68318",
"name": "Chaayos Chai+Snacks=Relax",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_68318.JPG",
"locality": "DLF Colony",
"areaName": "Sector 14",
"costForTwo": "₹250 for two",
"cuisines": [
"Beverages",
"Chaat",
"Snacks",
"Bakery",
"Street Food",
"healthy",
"Home Food",
"Maharashtrian",
"Italian",
"Desserts"
],
"avgRating": 4.6,
"parentId": "281782",
"avgRatingString": "4.6",
"totalRatingsString": "12K+",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-01 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹104"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cf149443-567a-41ae-8ca7-01f87617ddda"
},
"cta": {
"link": "https://www.swiggy.com/city/gurgaon/chaayos-chai-snacks-relax-dlf-colony-sector-14-rest68318",
"type": "WEBLINK"
}
}
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
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
        {
            resList.map((restaurant) => {
              return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
            // resList.map((restaurant, index) => {
            //   return <RestaurantCard key={index} resData={restaurant} />; // bad practice, but works for now
            }
        )
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* // Header
            // Body
            // Footer */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
