import React from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utlis/useRestaurantMenu';

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  const resInfo=useRestaurantMenu(resId)
  

  if (!resInfo) {
    return <Shimmer/>
  }

  const { name, cuisines, costForTwoMessage, avgRatingString} = resInfo.cards[2]?.card?.card?.info || {};
  let menuDetails = resInfo.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards
  menuDetails=menuDetails.slice(1)
//   console.log(menuDetails[0].card)
  return (
    <div>
      <h1>{name}</h1>
      <h3>Cuisines: {cuisines?.join(', ')}</h3>
      <h3>Cost for Two: {costForTwoMessage}</h3>
      <h3>Average Rating: {avgRatingString}</h3>
      <h3>Menu</h3>
      {
        menuDetails.map(items=>(
            <div>
                {items.card.card.title}
                {/* {console.log(items.card.card.itemCards)} */}
                <ul>
                    {
                        items.card.card.itemCards && items.card.card.itemCards.map(x=>(
                            <li key={x.card.info.id}>{(x.card.info.name)} -  Categoty -{x.card.info.category}</li>
                        ))
                    }
                </ul>
            </div>
        ))
      }
    </div>
  );
};

export default RestaurantMenu