export default function Stats({items}){
    if (!items.length)
        return (
            <p className="bg-[#76c7ad] text-center font-bold py-14 text-4xl h-40 my-auto">
                <em>
                    Start adding items to your packing list  
                </em>
            </p>
        );


   const numItems = items.length; //as sooon as the items are updated(from state) the component will re-render  
   const numPacked = items.filter((item) => item.packed).length
   const percentage =  Math.round((numPacked/numItems) * 100);

    return(
        <footer className="bg-[#76c7ad] text-center font-bold py-14 text-4xl h-38">
            <em>
            {percentage === 100 ? 'You get everything ! Ready to go +' :
             `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`
            }
          </em>
        </footer>
    )
}