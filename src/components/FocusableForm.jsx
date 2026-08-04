import {  useRef, useState } from "react"

function FocusableForm() {
    const inputRef = useRef(null);
    const renderCount = useRef(0);
    const [count, setCount] = useState(0)
    
    renderCount.current += 1;
    console.log(renderCount.current);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const handleClick = () => {
        inputRef.current.focus()
    }

    return (<>
        <input ref={inputRef} />
        <button onClick={handleClick}>Focus Input</button>
        <button onClick={increment}>increase</button>
    </>)
}

export default FocusableForm