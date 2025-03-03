import{ useState, useEffect } from 'react';
import ItemList from './components/ItemList';

// Use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URI);
      const data = await response.json();
      setItems(data);
      console.log('API URI:', API_URI);

    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setItems(items.filter((item) => item.id !== id));
      } else {
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return <ItemList items={items} onDelete={handleDelete} />;
}

export default App;