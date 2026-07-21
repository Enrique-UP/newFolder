import React, { useState, useCallback } from 'react';


const Button = React.memo(({ onClick, text }) => {
  console.log(`${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

export default function Exp14() {
    const code = `
        import React, { useState, useCallback } from 'react';
        

            const Button = React.memo(({ onClick, text }) => {
            return <button onClick={onClick}>{text}</button>;
        });

        export default function Exp14() {
        const [count1, setCount1] = useState(0);
        const [count2, setCount2] = useState(0);

        const handleClick1 = useCallback(() => {
            setCount1(count1 + 1);
        }, [count1]);

        const handleClick2 = useCallback(() => {
            setCount2(count2 + 1);
        }, [count2]);

        console.log("Parent rendered");
        return (
            <div>
            <h2>With useCallback:</h2>
            <p>Count 1: {count1}</p>
            <p>Count 2: {count2}</p>
            <Button onClick={handleClick1} text="Button 1" />
            <Button onClick={handleClick2} text="Button 2" />
            </div>
        );
        }
    `;

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  console.log("Parent rendered");
  return (
    <div>
        <pre>
            <code>{code}</code>
        </pre>
        <h1>Exp 14</h1>
      <h2>With useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}