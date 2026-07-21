import { useState } from 'react';

export default function Exp4() {
    const code = `
        import { useState } from 'react';

        export default function Exp5() {
        const [car, setCar] = useState({
            brand: "Ford",
            model: "Mustang",
            year: "1964",
            color: "red"
        });

        const updateColor = () => {
            setCar(previousState => {
            return { ...previousState, color: "blue" }
            });
        }

        return (
            <>
            <h1>Exp 5</h1>
            <h1>My {car.brand}</h1>
            <p>It is a {car.color} {car.model} from {car.year}.</p>
            <div className="btns">
                <button type="button" onClick={updateColor}>Blue</button>
            </div>
            </>
        )
        }
    `;
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>Exp 4</h1>
      <pre>
        <code>{code}</code>
      </pre>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
      <div className="btns">
        <button type="button" onClick={updateColor}>Blue</button>
      </div>
    </>
  )
}