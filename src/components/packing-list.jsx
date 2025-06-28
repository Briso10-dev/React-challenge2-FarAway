import Item from "./item";

export default function PackingList({items,onDeleteItem}){
    return(
        <div className="bg-[#5a3e2b] text-[#ffebb3] py-16 flex flex-col justify-between items-center gap-8 text-2xl">
            <ul className="list-none w-4/5 overflow-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 justify-center content-start">
                {items.map((item) => (
                    <Item item={item} key={item.id}/>
                ))}
            </ul>
        </div>       
    )
}