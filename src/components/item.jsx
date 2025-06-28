
function Item({item, onDeleteItem}){
    return (
        <li className="flex items-center gap-3">
            <input 
                type="checkbox" 
                value={item.packed} 
                className="h-5 w-5 accent-[#e5771f]"
            />
            <span className={item.packed ? "line-through" : ""}>
                {item.quantity} {item.description}
            </span>
            <button 
            className="cursor-pointer bg-none border-none text-2xl p-2 translate-y-0.5"
            onClick={() => onDeleteItem(item.id)}
            >❌</button>
        </li>
    ) 
}

export default Item;
