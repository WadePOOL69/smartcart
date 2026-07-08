function ItemCard({
  item,
  deleteItem,
  togglePurchased,
  editItem,
}) {
  return (
    <div
      className={`item-card ${
        item.purchased ? "purchased" : ""
      }`}
    >
      <div className="item-info">
        <h3>{item.name}</h3>

        <p>
          Quantity: <strong>{item.quantity}</strong>
        </p>

        <p>
          Category: <strong>{item.category}</strong>
        </p>
        <p>
  Added:
  <strong>{item.addedDate}</strong>
</p>

        <p>
          Status:{" "}
          <strong>
            {item.purchased
              ? "Purchased ✅"
              : "Pending ⏳"}
          </strong>
        </p>
      </div>

      <div className="item-actions">
        <button
          className="complete-btn"
          onClick={() => togglePurchased(item.id)}
        >
          {item.purchased
            ? "Mark Pending"
            : "Mark Purchased"}
        </button>

        <button
          className="edit-btn"
          onClick={() => editItem(item.id)}
        >
          ✏️ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteItem(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;