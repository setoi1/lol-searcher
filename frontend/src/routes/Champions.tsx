import { useState, useEffect } from 'react';
import axios from 'axios';

function Champions() {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <div className="champions-page">
        <h1>Champions</h1>
      </div>
    </>
  );
};

export default Champions;
