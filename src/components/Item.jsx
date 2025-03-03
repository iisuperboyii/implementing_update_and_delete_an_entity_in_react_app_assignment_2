const Item = ({ item, onDelete }) => {
    // Render a single item with Delete button
      return (
      <div>
          <span>{item.name}</span>
          <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
      );
  };
  
  export default Item;