import { resList } from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body=()=>{
 //state variable- super powerful variable
 //arr destructuring
   //const [listOfRestaurants,setListOfRestaurants]=useState(resList);
   const arr=useState(resList);
   const [listOfRestaurants,setListOfRestaurants]=arr;
  // const listOfRestaurants=arr[0];
  //const setListOfRestaurants=arr[1];

    return (
       <div className="body">
         <div className="filter">
          <button className="filter-btn" onClick=
          {()=>{
            const filtered_list=listOfRestaurants.filter((res)=>res.data.avgRating>4);
            setListOfRestaurants(filtered_list);
          }
          }>Top Rated Restaurant</button>
         </div>
         <div className="res-container">
           {
             listOfRestaurants.map((restaurant)=>
             //dont use index as key rather use unique key id
             (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))}
         </div>
       </div>
    );
  };
  export default Body;