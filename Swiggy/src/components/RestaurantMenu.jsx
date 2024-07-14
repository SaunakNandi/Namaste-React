import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utlis/useRestaurantMenu';
import  RestaurantCategory  from './RestaurantCategory';

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  const resInfo=useRestaurantMenu(resId)
  const [showIndex,setShowIndex]=useState(0)

  if (!resInfo) {
    return <Shimmer/>
  }

  const { name, cuisines, costForTwoMessage, avgRatingString} = resInfo.cards[2]?.card?.card?.info || {};
  // console.log(resInfo.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards)
  let menuDetails = resInfo.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards
  // const categories=menuDetails.filter(c=> c)

  const categories=menuDetails.filter((c)=>c.card?.['card']?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
  // console.log(categories)
  menuDetails=menuDetails.slice(1)

  function handleClick(index)
  {
    setShowIndex(index)
  }
  return (
    // <div>
    //   <h1>{name}</h1>
    //   <h3>Cuisines: {cuisines?.join(', ')}</h3>
    //   <h3>Cost for Two: {costForTwoMessage}</h3>
    //   <h3>Average Rating: {avgRatingString}</h3>
    //   <h3>Menu</h3>
    //   {
    //     menuDetails.map(items=>(
    //         <div>
    //             <h2 className='font-bold'>{items.card.card.title}</h2>
    //             {/* {console.log(items.card.card.itemCards)} */}
    //             <ul>
    //                 {
    //                     items.card.card.itemCards && items.card.card.itemCards.map(x=>(
    //                         <li key={x.card.info.id}>{(x.card.info.name)} -  Categoty -{x.card.info.category}</li>
    //                     ))
    //                 }
    //             </ul>
    //         </div>
    //     ))
    //   }
    // </div>
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className='font-bold text-lg'>{cuisines?.join(', ')} - {costForTwoMessage}</p>
      {/* categories accordian */}
      {
      categories.map((category,i)=>(
        <>
          {/* Controlled Component */}
          <RestaurantCategory key={category.card.card.title} data={category?.card?.card}
          index={i}
          handleClick={()=>setShowIndex(i)}
          show={false}
          showItem={i===showIndex}/>
        </>
      ))}
    </div>
  );
};

export default RestaurantMenu