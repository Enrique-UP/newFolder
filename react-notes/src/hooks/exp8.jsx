import { useState, useEffect } from 'react';

export default function Exp8() {
    const code = `
        import { useState, useEffect } from 'react';

        export default function Exp8() {
            const [count, setCount] = useState(0);

            useEffect(() => {
                let timer = setTimeout(() => {
                setCount((count) => count + 1);
                }, 1000);

                return () => clearTimeout(timer)
            }, []);

            return(
                <>
                    <h1>I've rendered {count} times!</h1>
                </>
            );
        }
    `;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer)
  }, []);

  return(
    <>
        <h1>Exp 8</h1>
        <pre>
            <code>{code}</code>
        </pre>
        <h1>I've rendered {count} times!</h1>
    </>
  );
}