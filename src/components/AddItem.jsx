import { useState } from "react";

function AddItem({ addItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Groceries");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter an item name.");
      return;
    }

    const newItem = {
  id: Date.now(),
  name: name.trim(),
  quantity: Number(quantity),
  category,
  purchased: false,
  addedDate: new Date().toLocaleString("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
}),
};

    addItem(newItem);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("Groceries");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Groceries</option>
        <option>Vegetables</option>
        <option>Fruits</option>
        <option>Dairy</option>
        <option>Bakery</option>
        <option>Beverages</option>
        <option>Snacks</option>
        <option>Personal Care</option>
        <option>Household</option>
        <option>Others</option>
      </select>

      <button type="submit">
        Add Item
      </button>
    </form>
  );
}

export default AddItem;