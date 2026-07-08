import { useEffect, useState } from "react";
import "./App.css";

import AddItem from "./components/AddItem";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import ItemCard from "./components/ItemCard";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("smartcart-items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("smartcart-theme");
  return savedTheme ? JSON.parse(savedTheme) : false;
});

  useEffect(() => {
    localStorage.setItem("smartcart-items", JSON.stringify(items));
  }, [items]);
  useEffect(() => {
  localStorage.setItem(
    "smartcart-theme",
    JSON.stringify(darkMode)
  );
}, [darkMode]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const deleteItem = (id) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };
  const clearAllItems = () => {
  if (items.length === 0) {
    alert("Your shopping list is already empty.");
    return;
  }

  const confirmClear = window.confirm(
    "Are you sure you want to delete all shopping items?"
  );

  if (confirmClear) {
    setItems([]);
  }
};

  const togglePurchased = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, purchased: !item.purchased }
          : item
      )
    );
  };
  const editItem = (id) => {
  const itemToEdit = items.find((item) => item.id === id);

  const newName = prompt("Edit item name:", itemToEdit.name);

  if (newName === null || newName.trim() === "") return;

  const newQuantity = prompt(
    "Edit quantity:",
    itemToEdit.quantity
  );

  if (
    newQuantity === null ||
    isNaN(newQuantity) ||
    Number(newQuantity) <= 0
  )
    return;

  setItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id
        ? {
            ...item,
            name: newName.trim(),
            quantity: Number(newQuantity),
          }
        : item
    )
  );
};

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "Pending")
      return matchesSearch && !item.purchased;

    if (filter === "Purchased")
      return matchesSearch && item.purchased;

    return matchesSearch;
  });

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>

      <header className="header">
  <h1>🛒 SmartCart</h1>

  <p className="subtitle">
    Manage your shopping smarter and faster.
  </p>
</header>
<div className="theme-toggle">
  <button
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
  </button>
</div>

      <AddItem addItem={addItem} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterButtons
        filter={filter}
        setFilter={setFilter}
      />

      <div className="top-section">
  <Stats items={items} />

  <button
    className="clear-btn"
    onClick={clearAllItems}
  >
    🗑 Clear All
  </button>
</div>

      <div className="items-container">
  {filteredItems.length === 0 ? (
    <p className="empty">
      🛍️ Your shopping list is empty.
      <br />
      Add your first item above.
    </p>
  ) : (
    filteredItems.map((item) => (
      <ItemCard
        key={item.id}
        item={item}
        deleteItem={deleteItem}
        togglePurchased={togglePurchased}
        editItem={editItem}
      />
    ))
  )}
</div>

<footer className="footer">
  <p>Built with ❤️ using React + Vite</p>
</footer>

</div>
);
}

export default App;