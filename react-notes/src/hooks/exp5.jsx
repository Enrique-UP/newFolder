import { useState, useEffect } from 'react';

export default function Exp5(){
    const code = `
        import { useState, useEffect } from 'react';

        export default function Exp4(){
            const [count, setCount] = useState(0);

            useEffect(() => {
                setTimeout(() => {
                setCount((count) => count + 1);
                }, 1000);
            });

            return (
            <>
                <h1>Exp 4</h1>
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
    });

    return (
     <>
        <h1>Exp 5</h1>
        <pre>
            <code>{code}</code>
        </pre>
        <h1>I've rendered {count} times!</h1>
     </>
    );
}