import { useState } from "react";

function AddItem({ addItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("pcs");
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
  unit,
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
    setUnit("pcs");
setCategory("🛒 Groceries");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
  {/* Item Name */}
  <input
    type="text"
    placeholder="Enter item name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  {/* Quantity */}
  <input
    type="number"
    min="1"
    value={quantity}
    onChange={(e) => setQuantity(e.target.value)}
  />

  {/* NEW: Unit */}
  <select
    value={unit}
    onChange={(e) => setUnit(e.target.value)}
  >
    <option value="pcs">Pieces (pcs)</option>
    <option value="kg">Kilograms (kg)</option>
    <option value="g">Grams (g)</option>
    <option value="L">Litres (L)</option>
    <option value="ml">Millilitres (ml)</option>
    <option value="dozen">Dozen</option>
    <option value="pack">Pack</option>
    <option value="box">Box</option>
  </select>

  {/* Category */}
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option>🥦 Vegetables</option>
    <option>🍎 Fruits</option>
    <option>🥛 Dairy</option>
    <option>🍞 Bakery</option>
    <option>🥤 Beverages</option>
    <option>🍪 Snacks</option>
    <option>🧴 Personal Care</option>
    <option>🏠 Household</option>
    <option>🛒 Groceries</option>
    <option>📦 Others</option>
  </select>

  <button type="submit">
    Add Item
  </button>
</form>
  );
}

export default AddItem;