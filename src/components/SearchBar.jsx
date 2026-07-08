function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="search-box"
      placeholder="🔍 Search items..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;