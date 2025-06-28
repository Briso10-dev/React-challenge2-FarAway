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

  return (
    <>
      <div className="grid grid-rows-[auto_auto_1fr_auto] h-screen">
      <Logo />
      <Form onAddItems= {handleAddItems} />
      <PackingList items= {items} onDeleteItem={handleDeleteItem } />
      <Stats />
      </div>
    </>
  )
}

export default App
