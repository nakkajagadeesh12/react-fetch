import React, { useState, useEffect } from 'react';
const Hello = () => {
  let [data, updateData] = useState([]);
  useEffect = (async () => {
    console.log("dghd")
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json();
    updateData(json);
  });
  // const getData = async () => {
  //   console.log("coming");
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const json = await response.json();
  //   updateData(json);
  //   console.log(data, "df")
  // }

  return (
    <div>
      {console.log(data, "data")}
    </div>
  )
}

export default Hello;

