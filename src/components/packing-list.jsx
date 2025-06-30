import { useState } from "react";
import Item from "./item";

export default function PackingList({items,onDeleteItem,onToggleItem}){
    const [sortBy, setSortBy] = useState("input");
    
    let sortedItems;
    
    if(sortBy === 'input') sortedItems=items;

    if(sortBy == 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description))

    if(sortBy == 'packed') sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed) );    

    return(
        <div className="bg-[#5a3e2b] text-[#ffebb3] py-20 flex flex-col justify-between items-center gap-8 text-2xl h-[59vh]">
            <ul className="list-none w-4/5 overflow-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 justify-center content-start">
                {sortedItems .map((item) => (
                    <Item item={item} 
                    onDeleteItem={onDeleteItem}
                    onToggleItem={onToggleItem} 
                    key={item.id}/>
                ))}
            </ul>
            <div className="mb-14">
                <select className="uppercase px-6 py-3.5 text-[1.6rem] font-bold mx-2 text-black bg-[#ffebb3] rounded-2xl"
                        value={sortBy} 
                        onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input ordder</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>

            </div>
        </div>       
    )
}