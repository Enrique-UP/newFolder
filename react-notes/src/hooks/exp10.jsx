import { useState, useRef, useEffect } from 'react';

export default function Exp10() {
    const code = `
        import { useState, useRef, useEffect } from 'react';

        export default function Exp10() {
            const [inputValue, setInputValue] = useState("");
            const count = useRef(0);

            useEffect(() => {
                count.current = count.current + 1;
            });

            return (
                <>
                <p>Type in the input field:</p>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <h1>Render Count: {count.current}</h1>
                </>
            );
        }
    `;
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
        <h1>Exp10</h1>
        <pre>
            <code>{code}</code>
        </pre>
      <p>Type in the input field:</p>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Type here any text' />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}