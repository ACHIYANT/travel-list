import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// ? Data used for testing.
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

function App() {
  // ! This is lifting up of state because the below peice of state is originally created in Form component but need to use in PackingList component we can pass it using props but can't pass it because Form and PackingList are siblings not parent-child. So to overcome this problem we are lifting up of state to the nearest common parent.

  const [items, setItems] = useState([]);

  function handleDeletedItem(id) {
    console.log("handleDeletedItem");
    setItems(items.filter((item) => item.id !== id));
    // setPacked()
  }
  function handlePackedItem(id) {
    console.log("handlePackedItem");
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    // packedCount=0;
    // items.map((item)=>(item.packed===true)?packedCount+=1:packedCount);
  }
  function handleAddItems(item) {
    console.log("handleAdditems");
    setItems((items) => [...items, item]);
    // packedCount=0;
    // items.map((item)=>(item.packed===true)?packedCount+=1:packedCount);
  }
  function handleClearList() {
    if (items.length !== 0) {
      const confirmation = window.confirm(
        "Are you sure you want to delete all items ?"
      );
      confirmation && setItems([]);
    }
  }
  
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeletedItem}
        onPackedItem={handlePackedItem}
        onClear={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
