import { useState, useEffect } from 'react';


export default function Exp17() {
  const [data, setData] = useState(null);

  const code = `
    import { useState, useEffect } from 'react';

    export default function Exp17() {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data));
        }, []);

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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

  return (
    <>
    <pre><code>{code}</code></pre>
    <p></p>
    <h1>Exp 17</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};