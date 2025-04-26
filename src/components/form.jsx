import { useState } from "react";

export default function Form(){
    const [description,setDescription] = useState("TEST");
    const [quantity, setQuantity] = useState(5);

    function handleSubmit(e){
        e.preventDefault();
        if(!description) return;

        const newItem = {description,quantity,packed: false,
        id: Date.now() };
        console.log(newItem);

        setDescription('');
        setQuantity(1);
    }

    return(
        <form onSubmit={handleSubmit} className="bg-[#e5771f] py-7 flex items-center justify-center gap-2 text-2xl">
            <h3 className="mr-4 text-2xl">What do you need for your 😍 trip?</h3>
            <select 
                value={quantity} 
                onChange={(e)=> setQuantity(Number(e.target.value))}
                className="bg-[#ffebb3] text-[#5a3e2b] font-inherit border-none rounded-full px-8 py-3 font-bold text-lg cursor-pointer"
            >
                {Array.from({ length: 20}, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>{num}</option> 
                ))}
            </select> 
            <input 
                type="text" 
                placeholder="Item..." 
                value={description} 
                onChange={(e)=> setDescription(e.target.value)}
                className="bg-[#ffebb3] text-[#5a3e2b] font-inherit border-none rounded-full px-8 py-3 font-bold text-lg"
            />
            <button className="uppercase bg-[#76c7ad] text-[#5a3e2b] font-inherit border-none rounded-full px-8 py-3 font-bold text-lg cursor-pointer">Add</button>
        </form>
    )
}