import "./App.css";

import Exp1 from "./hooks/exp1";
import Exp2 from "./hooks/exp2";
import Exp3 from "./hooks/exp3";
import Exp4 from "./hooks/exp4";
import Exp5 from "./hooks/exp5";
import Exp6 from "./hooks/exp6";
import Exp7 from "./hooks/exp7";
import Exp8 from "./hooks/exp8";
import Exp9 from "./hooks/exp9";
import Exp10 from "./hooks/exp10";
import Exp11 from "./hooks/exp11";
import Exp12 from "./hooks/exp12";
import Exp13 from "./hooks/exp13";
import Exp14 from "./hooks/exp14";
import Exp15 from "./hooks/exp15";

function App() {
  return (
    <>
      <main>
        <h1 className="hd">useState</h1>
        <Exp1 />   
        <hr />   
        <Exp2 />
        <hr />
        <Exp3 />
        <hr />
        <Exp4 />
        <h1 className="hd">useEffect</h1>
        <Exp5 />
        <hr />
        <Exp6 />
        <hr />
        <Exp7 />
        <hr />
        <Exp8 />
        <h1 className="hd">useContext</h1>
        <Exp9 />
        <h1 className="hd">useRef</h1>
        <Exp10 />
        <hr />
        <Exp11 />
        <h1 className="hd">useReducer</h1>
        <Exp12 />
        <h1 className="hd">useCallback</h1>
        <Exp13 />
        <hr />

        {/* 
        <h1 className="hd">Loremmmmm</h1>
        
        
        
        <Exp14 />
        <Exp15 /> */}
      </main>
    </>
  );
}

export default App;