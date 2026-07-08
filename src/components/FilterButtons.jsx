function FilterButtons({ filter, setFilter }) {
  const filters = ["All", "Pending", "Purchased"];

  return (
    <div className="filter-buttons">
      {filters.map((type) => (
        <button
          key={type}
          className={filter === type ? "active" : ""}
          onClick={() => setFilter(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;