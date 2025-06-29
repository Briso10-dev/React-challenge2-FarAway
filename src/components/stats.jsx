export default function Stats({items}){

   const numItems = items.length; //as sooon as the items are updated(from state) the component will re-render  
   const numPacked = items.filter((item) => item.packed).length
   const percentage =  Math.round((numPacked/numItems) * 100);

    return(
        <footer className="bg-[#76c7ad] text-center font-bold py-8 text-3xl">
           <em>You have {numItems} items on your list, and you already packed {numPacked} ({percentage}%)</em>
        </footer>
    )
}