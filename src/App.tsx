import "./App.css";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    const handleClick = (value: number) => {
        setCount((prev) => prev + value);
    };

    return (
        <>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    handleClick(10);
                }}
            >
                Click me
            </button>
        </>
    );
}

export default App;
