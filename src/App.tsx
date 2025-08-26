import "./App.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function App() {
    const [count, setCount] = useState(0);

    const handleClick = (value: number): void => {
        setCount((prev) => prev + value);
    };

    return (
        <>
            <h1>{count}</h1>
            <Button
                onClick={() => {
                    handleClick(10);
                }}
            >
                Click me
            </Button>
        </>
    );
}

export default App;
