import { useState, useEffect } from 'react';

export default function Exp7() {
    const code = `
        import { useState, useEffect } from 'react';

        export default function Exp7() {
            const [count, setCount] = useState(0);
            const [calculation, setCalculation] = useState(0);

            useEffect(() => {
                setCalculation(() => count * 2);
            }, [count]); // <- add the count variable here

            return (
                <>
                    <h1>Exp 7</h1>
                <p>Count: {count}</p>
                <div className="btns">
                    <button onClick={() => setCount((c) => c + 1)}>+</button>
                </div>
                <p>Calculation: {calculation}</p>
                </>
            );
        }
    `;
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
        <h1>Exp 7</h1>
        <pre>
            <code>{code}</code>
        </pre>
      <p>Count: {count}</p>
      <div className="btns">
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <p>Calculation: {calculation}</p>
    </>
  );
}