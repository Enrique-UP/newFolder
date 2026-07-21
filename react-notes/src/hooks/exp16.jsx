// With useMemo
import { useState, useMemo } from 'react';


export default function Exp16() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const code = `
    // With useMemo
    import { useState, useMemo } from 'react';
    

    export default function Exp16() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
        <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <p>&nbsp;</p>
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
            <p>Note: This example executes the expensive function only when you click on the Increment button, and not when you add a todo.</p>
        </div>
        </div>
    );
    };

    const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
    };
  `;

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
        <pre><code>{code}</code></pre>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <p>&nbsp;</p>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
        <p>Note: This example executes the expensive function only when you click on the Increment button, and not when you add a todo.</p>
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};