import { useState } from "react";

export default function Form({ onAddItems }) {
  // ? Below two states are for controlled elemnt in the form.
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  
  function handleAdd(event) {
    event.preventDefault();

    // ! if item name is missiong then there is no form submission.
    if (!desc) return;

    //Creating newItem object to input data
    const newItem = { desc, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    // * Reseting the form after form submission.
    setDesc((desc) => (desc = ""));
    setQuantity((quantity) => (quantity = 1));
  }
  return (
    <form className="add-form" target="" onSubmit={handleAdd}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* <option value="{1}">1</option>
            <option value="{2}">2</option>
            <option value="{3}">3</option> */}
      </select>
      <input
        type="text"
        name=""
        id=""
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDesc(() => e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
