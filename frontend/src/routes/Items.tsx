import { useState, useEffect } from 'react';
import axios from 'axios';

function Items() {

  const [currentItem, setCurrentItem] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div className="items-page">
        <h1>Items</h1>
      </div>
    </>
  );
};

export default Items;