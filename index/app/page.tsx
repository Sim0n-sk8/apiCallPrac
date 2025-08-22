"use client"

import { useState,useEffect } from "react";

function apiCall() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
}

const api = 'https://jsonplaceholder.typicode.com/todos';

useEffect(() => {
  fetch(api)

    .then(response => {
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
      })

      

}, []);








export default function Home() {
  return (
   <div></div>
  );
}
