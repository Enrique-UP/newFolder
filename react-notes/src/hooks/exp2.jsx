import { useState } from 'react';

export default function exp2() {
    const code = `
    import { useState } from 'react';

    export default function exp2() {
        const [brand, setBrand] = useState("Ford");
        const [model, setModel] = useState("Mustang");
        const [year, setYear] = useState("1964");
        const [color, setColor] = useState("red");

        return (
            <>
                <h1>My {brand}</h1>
                <p>It is a {color} {model} from {year}.</p>
            </>
        )
    }
    `;
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
        <h1>Exp 2</h1>
        <pre>
            <code>{code}</code>
        </pre>
        <h1>My {brand}</h1>
        <p>It is a {color} {model} from {year}.</p>
    </>
  )
}