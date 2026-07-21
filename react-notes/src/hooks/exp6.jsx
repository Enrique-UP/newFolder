import { useState, useEffect } from 'react';

export default function Esp6() {
    const code = `
        import { useState, useEffect } from 'react';

        export default function Esp6() {
            const [count, setCount] = useState(0);

            useEffect(() => {
                setTimeout(() => {
                setCount((count) => count + 1);
                }, 1000);
            }, []); // <- add empty brackets here

            return(
                <>
                    <h1>I've rendered {count} times!</h1>
                </>
            );
        }
    `;
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return(
    <>
        <h1>Exp6</h1>
        <pre>
            <code>{code}</code>
        </pre>
        <h1>I've rendered {count} times!</h1>
    </>
  );
}
