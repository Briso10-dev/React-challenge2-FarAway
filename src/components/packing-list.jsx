import Item from "./item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function PackingList(){
    return(
        <div className="bg-[#5a3e2b] text-[#ffebb3] py-16 flex flex-col justify-between items-center gap-8 text-2xl">
            <ul className="bg-black list-none w-4/5 overflow-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 justify-center content-start">
                {initialItems.map((item) => (
                    <Item item={item} key={item.id}/>
                ))}
            </ul>
        </div>       
    )
}