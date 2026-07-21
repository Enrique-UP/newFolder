import { useRef, useState, useEffect } from 'react';

export default function Exp11() {
    const code = `
        import { useRef, useState, useEffect } from 'react';

        export default function Exp11() {
            const [inputValue, setInputValue] = useState("");
            const previousInputValue = useRef("");

            useEffect(() => {
                previousInputValue.current = inputValue;
            }, [inputValue]);

            return (
                <>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Type here text' />
                <h2>Current Value: {inputValue}</h2>
                <h2>Previous Value: {previousInputValue.current}</h2>
                </>
            );
        }
    `;
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
        <h1>Exp11</h1>
        <pre>
            <code>{code}</code>
        </pre>
        <p>Type in the input field:</p>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Type here text' />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}