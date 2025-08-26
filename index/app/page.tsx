"use client"

import { useState,useEffect } from "react";

function ApiCall() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const api = 'https://jsonplaceholder.typicode.com/todos';

useEffect(() => {
  fetch(api)

    .then(response => {
      if(!response.ok) {
        throw new Error(`HUH`);
      }
      return response.json();
      })

      .then(json => {
                setData(json);
                setLoading(false);
            })

        .catch(error => {
          setError(error);
          setLoading(false);
        })

        }, []);

        if(loading) return <div>Loading data...</div>;
        if(error) return <div>Error</div>;

        return(

          <div>
            <h1>Fetched Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>

        );
  };

export default function Home() {
  return (
   <div>
    <ApiCall/>
   </div>
  );
}
