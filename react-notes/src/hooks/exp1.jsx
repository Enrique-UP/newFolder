import { useState } from 'react';

export default function Exp1() {
  const code = `
    import { useState } from 'react';
    
    export default function Exp1() {
        const [color, setColor] = useState("red");
        return (
            <>
            <h1>My favorite color is {color}!</h1>
            <div className="btns">
                <button type="button" onClick={() => setColor("blue")}>Blue</button>
                <button type="button" onClick={() => setColor("red")}>Red</button>
                <button type="button" onClick={() => setColor("pink")}>Pink</button>
                <button type="button" onClick={() => setColor("green")}>Green</button>
            </div>
            </>
        );
    }
  `;

  const [color, setColor] = useState("red");
  return (
    <>
      <h1>Exp 1</h1>
      <pre>
        <code>{code}</code>
      </pre>
      <h1>My favorite color is {color}!</h1>
      <div className="btns">
        <button type="button" onClick={() => setColor("blue")}>Blue</button>
        <button type="button" onClick={() => setColor("red")}>Red</button>
        <button type="button" onClick={() => setColor("pink")}>Pink</button>
        <button type="button" onClick={() => setColor("green")}>Green</button>
      </div>
    </>
  );
}