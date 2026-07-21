import { useState, createContext, useContext } from 'react';

const UserContext = createContext();

export default function Exp9() {
  // Escaped backticks and dollar signs so they don't evaluate in the string
  const code = `
    import { useState, createContext, useContext } from 'react';

    const UserContext = createContext();

    export default function Exp9() {
        const [user, setUser] = useState("Linus");

        return (
            <>
                <UserContext.Provider value={user}>
                    <h1>{\`Hello \${user}!\`}</h1>
                    <Component2 />
                </UserContext.Provider>
            </>
        );
    }

    function Component2() {
        return (
            <>
                <h1>Component 2</h1>
                <Component3 />
            </>
        );
    }

    function Component3() {
        const user = useContext(UserContext);

        return (
            <>
                <h1>Component 3</h1>
                <h2>{\`Hello \${user} again!\`}</h2>
            </>
        );
    }
  `;

  const [user, setUser] = useState("Linus");

  return (
    <>
        <h1>Exp9</h1>
      <pre>
        <code>{code}</code>
      </pre>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </UserContext.Provider>
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}