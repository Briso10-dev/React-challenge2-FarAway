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


  return (
    <>
      <div className="grid grid-rows-[auto_auto_1fr_auto] h-screen">
      <Logo />
      <Form onAddItems= {handleAddItems} />
      <PackingList items= {items} />
      <Stats />
      </div>
    </>
  )
}

export default App
