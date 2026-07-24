import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0);


    function incrementTwice() {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1)
    }

    return (
        <>
            <div>counter: {count}</div>
            <button onClick={() => setCount(prev => prev + 1)}> increase</button>
            <button onClick={() => setCount(prev => prev - 1)}>decrease</button>
            <button onClick={() => setCount(0)}>reset</button>

            <button onClick={incrementTwice}>twice</button>

        </>
    )
}

export default Counter