import React, { useState, useEffect } from 'react';
const Hello = () => {
  const [data, updateData] = useState([]);
  useEffect = (async () => {
    console.log("dghd")
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    updateData(json);
  }, [data]);

  return (
    <div>
    
    </div>
  )
}

export default Hello;

