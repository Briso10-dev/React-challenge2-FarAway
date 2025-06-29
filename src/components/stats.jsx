export default function Stats(){

   const numItems = items.length; //as sooon as the items are updated(from state) the component will re-render  
 

    return(
        <footer className="bg-[#76c7ad] text-center font-bold py-8 text-3xl">
           <em>You have X items on your list, and you already packed X (X%)</em>
        </footer>
    )
}