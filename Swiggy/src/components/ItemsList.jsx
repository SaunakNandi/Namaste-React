import { CDN_URL_INSIDE_IMAGE } from "../utlis/constants";
const ItemList=({items})=>{
    // console.log(items)
    
    return (
        <div>
            {
                items.map(item=>(
                    <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 rounded-md text-left flex flex-row-reverse justify-between">
                        <div className="relative">
                            <img src={CDN_URL_INSIDE_IMAGE+item.card.info.imageId} className="w-28 h-20 rounded-md" alt={item.card.info.name} />
                            <div className="absolute bottom-0 translate-x-[50%] translate-y-[-10%]">
                                <button className="p-1 bg-red-500 shadow-md 
                                font-semibold rounded-md">Add +</button>
                            </div>
                        </div>
                        <div className="">
                            <div className="py-2">
                                <h3>{item.card.info.name}</h3>
                                <h2>₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</h2>
                            </div>
                            <div className="w-2/3">

                                <p className="text-xs">{item.card.info.description}</p>
                            </div>
                        </div>

                    </div>
                ))
            }
            
        </div>
    )
}

export default ItemList;