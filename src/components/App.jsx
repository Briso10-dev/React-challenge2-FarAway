import { useState } from "react"
import Logo from "./logo"
import Form from "./form"
import PackingList from "./packing-list"
import Stats from "./stats"


function App() {

   const [items, setItems] = useState([]);

   function handleAddItems(item){
          setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id){
        setItems(items=>items.filter(item=>item.id !== id));
    }

    function handleToggleItem(id){
        setItems((items)=> 
          items.map((item) => 
            item.id === id ? {...item, packed: !item.packed}
            : item
          )
        );
    }

     function deleteAllItems(){
          const confirmed = window.confirm("Are you sure you want to delete all items?");

          if(confirmed) setItems([]);            
    }

  return (
    <>
      <div className="grid grid-rows-[auto_auto_1fr_auto] h-screen">
      <Logo />
      <Form onAddItems= {handleAddItems} />
      <PackingList items= {items} onDeleteItem={handleDeleteItem } onToggleItem={handleToggleItem} onDeleteAllItems = {deleteAllItems} />
      <Stats items={items} />
      </div>
    </>
  )
}

export default App
