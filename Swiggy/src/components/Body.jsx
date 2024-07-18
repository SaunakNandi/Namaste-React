import React, { useState, useEffect, useContext } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import UserContext from "./UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  console.log("Show list of restaurants ", listOfRestaurants);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4929423&lng=88.2716659&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();
      // console.log(json.data.cards);
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants
      );
    };
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
  {
    return (
      <h1>Looks like you're Offline!! Please check you internet connection</h1>
    );
  }

  const {loggedInUser,setUserName}=useContext(UserContext)
  // useEffect(()=>{
  //   setListOfRestaurants(listOfRestaurants.filter((item)=>item.info.name.toLowerCase().includes(searchText.toLowerCase())))
  // },[searchText])

  return listOfRestaurants.length > 0 ? (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="p-2 rounded-md bg-green-100 m-4"
            onClick={() => {
              const filtered_result = listOfRestaurants.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered_result);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => {
              const filtered = filteredRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              // console.log(filtered)
              setFilteredRestaurant(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label htmlFor="">User Name</label>
          <input type="text" className="border border-black p-1"
          value={loggedInUser}
          onChange={(e)=> setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((data, i) => (
          <Link key={data.info.id} to={'/restaurant/'+data.info.id} className='m-4 p-1 w-[250px] h-[360px] ml-7 mt-8 rounded-md hover:bg-gray-400 '>
            {/* if the restaurant is promoted then add a promoted label to it*/
              data.info?.promoted ? <RestaurantCardPromoted resData={data.info} />:<RestaurantCard resData={data.info} />
            }
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
