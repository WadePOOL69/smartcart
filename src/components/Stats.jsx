function Stats({ items }) {
  const total = items.length;
  const purchased = items.filter((item) => item.purchased).length;
  const pending = total - purchased;

  return (
    <div className="stats">
      <div className="stat-card">
        <h2>{total}</h2>
        <p>Total Items</p>
      </div>

      <div className="stat-card">
        <h2>{pending}</h2>
        <p>Pending</p>
      </div>

      <div className="stat-card">
        <h2>{purchased}</h2>
        <p>Purchased</p>
      </div>
    </div>
  );
}

export default Stats;