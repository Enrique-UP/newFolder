import { createRoot } from 'react-dom/client';
import useFetch from "./useFetch";

const code = `
    import { useState, useEffect } from "react";
    
    const useFetch = (url) => {
      const [data, setData] = useState(null);
    
      useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, [url]);
    
      return [data];
    };
    
    export default useFetch;



    import { createRoot } from 'react-dom/client';
    import useFetch from "./useFetch";

    export default function Exp18() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
        {data &&
            data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
            })}
        </>
    );
    };
`;
export default function Exp18() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
        <pre><code>{code}</code></pre>
      <p></p>
      <h1>Exp 18</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};